import { ReactNode } from "react";

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return <p className={dark ? "eyebrow-dark" : "eyebrow"}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-3xl font-medium leading-tight md:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-concrete/80" : "text-slate"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
