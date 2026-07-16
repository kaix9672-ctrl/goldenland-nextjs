import { kairos } from "@/lib/site";

const iconClass = "h-5 w-5";

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.44c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.25 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.16 1.04.36 2.19.41 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.25 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.25-1.77-.41-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.75-.07Zm0 2.45a5.95 5.95 0 1 1 0 11.9 5.95 5.95 0 0 1 0-11.9Zm0 1.44a4.51 4.51 0 1 0 0 9.02 4.51 4.51 0 0 0 0-9.02Zm6.19-.79a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0Z" />
    </svg>
  );
}
function TikTok() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.9a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1 0-5.2c.27 0 .53.04.77.12v-3.3a5.9 5.9 0 0 0-.77-.05A5.83 5.83 0 1 0 15.4 15.9V9.4a7.5 7.5 0 0 0 4.37 1.4V7.6a4.28 4.28 0 0 1-3.17-1.78Z" />
    </svg>
  );
}
function X() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
    </svg>
  );
}

export function SocialIcons({ dark = false }: { dark?: boolean }) {
  const base = dark
    ? "text-concrete/70 hover:text-white"
    : "text-slate hover:text-ink";
  const links: [string, string, () => JSX.Element][] = [
    ["Instagram", kairos.social.instagram, Instagram],
    ["TikTok", kairos.social.tiktok, TikTok],
    ["X", kairos.social.x, X],
  ];
  return (
    <ul className="flex items-center gap-4">
      {links.map(([label, href, Icon]) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`KAIROS on ${label}`}
            className={`inline-flex transition-colors ${base}`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
