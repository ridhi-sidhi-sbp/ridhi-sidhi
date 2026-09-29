import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`mt-5 text-3xl leading-[1.15] sm:text-4xl lg:text-5xl ${
          tone === "light" ? "text-bone" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <span className={`rule-gold mt-6 ${centered ? "mx-auto" : ""}`} />
      {description ? (
        <p
          className={`mt-6 text-base leading-relaxed ${
            tone === "light" ? "text-bone/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
