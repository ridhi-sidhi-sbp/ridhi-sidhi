#!/usr/bin/env bash
set -euo pipefail

D="${1:?usage: add-site.sh <domain>   e.g. add-site.sh example.com}"
IP=187.126.117.159
EDGE=salonjaa-edge-caddy-1
SITES=/opt/sites
CONF="$SITES/edge/$D.caddy"
W=www

[[ "$D" =~ ^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$ ]] || { echo "Invalid domain: $D"; exit 1; }
[[ -e "$CONF" ]] && { echo "$D is already configured: $CONF"; exit 1; }

# DNS must point here first, or certificate issuance fails
for h in "$D" "$W.$D"; do
  got=$(getent ahostsv4 "$h" | awk '{print $1; exit}' || true)
  if [[ "$got" != "$IP" ]]; then
    echo "DNS for $h is '${got:-none}', expected $IP. Fix DNS first."
    exit 1
  fi
done

mkdir -p "$SITES/www/$D"
find "$SITES/www/$D" -type d -exec chmod 755 {} +
find "$SITES/www/$D" -type f -exec chmod 644 {} +

cat > "$CONF" <<EOF
$D {
	import common
	reverse_proxy sites-sites-1:80 {
		header_up Host {host}
	}
}

$W.$D {
	redir https://$D{uri} permanent
}
EOF

# Validate inside the live edge container; undo if invalid
if ! docker exec "$EDGE" caddy validate --config /etc/caddy/Caddyfile >/tmp/add-site.err 2>&1; then
  echo "Validation FAILED, removing $CONF. Nothing was reloaded."
  tail -5 /tmp/add-site.err
  rm -f "$CONF"
  exit 1
fi

docker exec "$EDGE" caddy reload --config /etc/caddy/Caddyfile
echo "Done. Site folder: $SITES/www/$D/   (upload dist/ there if not done yet)"
