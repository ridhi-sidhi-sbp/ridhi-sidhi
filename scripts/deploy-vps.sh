#!/usr/bin/env bash
# Build the site and deploy dist/ to the shared VPS (see the deploy-static-site skill).
#
# Usage (Git Bash, from anywhere):
#   bash scripts/deploy-vps.sh [domain]
#   npm run deploy:vps -- [domain]
#
# Domain defaults to ridhisidhigarments.shop. SSH_TARGET overrides the login
# (default deploy@187.126.117.159, key auth only).
#
# Content goes to /opt/sites/www/<domain>/. If the edge snippet
# /opt/sites/edge/<domain>.caddy does not exist yet, the site is registered with
# /opt/sites/add-site.sh; otherwise this is only a content update.
set -euo pipefail

DOMAIN="${1:-ridhisidhigarments.shop}"
SSH_TARGET="${SSH_TARGET:-deploy@187.126.117.159}"

if [[ ! "$DOMAIN" =~ ^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$ ]]; then
  echo "Usage: bash scripts/deploy-vps.sh [domain]   e.g. bash scripts/deploy-vps.sh example.com" >&2
  echo "Got '${DOMAIN}': use lowercase letters, digits, hyphens and dots only (no scheme or path)." >&2
  exit 1
fi

WWW_HOST="www.${DOMAIN}"
REMOTE_DIR="/opt/sites/www/${DOMAIN}"
SNIPPET="/opt/sites/edge/${DOMAIN}.caddy"

cd "$(dirname "$0")/.."

echo "==> Checks"
npm run typecheck
npm run lint

echo "==> Build"
npm run build
if [ ! -f dist/index.html ]; then
  echo "dist/index.html missing after build; aborting." >&2
  exit 1
fi

echo "==> Create ${REMOTE_DIR} on ${SSH_TARGET}"
ssh "$SSH_TARGET" "mkdir -p '${REMOTE_DIR}'"

echo "==> Upload dist/ to ${REMOTE_DIR}"
scp -r dist/* "${SSH_TARGET}:${REMOTE_DIR}/"

echo "==> Fix permissions and register the site if it is new"
ssh "$SSH_TARGET" "
  set -e
  find '${REMOTE_DIR}' -type d -exec chmod 755 {} +
  find '${REMOTE_DIR}' -type f -exec chmod 644 {} +
  if [ -f '${SNIPPET}' ]; then
    echo 'Edge snippet already present: content update only, no registration.'
  else
    /opt/sites/add-site.sh '${DOMAIN}'
  fi
"

echo "==> Verify"
apex_code="$(curl -s -o /dev/null -w '%{http_code}' "https://${DOMAIN}/" || true)"
www_code="$(curl -s -o /dev/null -w '%{http_code}' "https://${WWW_HOST}/" || true)"
echo "https://${DOMAIN}/        -> HTTP ${apex_code} (expect 200)"
echo "https://${WWW_HOST}/      -> HTTP ${www_code} (expect 301 to the apex)"

if [ "$apex_code" != "200" ]; then
  echo "Apex did not return 200. Check DNS and the edge snippet on the VPS." >&2
  exit 1
fi

echo "Deployed ${DOMAIN}."
