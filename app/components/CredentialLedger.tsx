import { Credential, visible } from "@/lib/credentials";

function StatusValue({ c }: { c: Credential }) {
  if (c.status === "active") {
    return <span className="font-mono text-sm text-white">{c.value}</span>;
  }
  // pending -> muted "in process" chip; never a fabricated value.
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-concrete/60">
      <span className="h-1.5 w-1.5 rounded-full bg-goldsoft/70" aria-hidden />
      {c.value}
    </span>
  );
}

/**
 * The credential ledger reads like a construction-drawing title block: the exact
 * identifiers a contracting officer scans for, engraved in mono type. Pending
 * items render honestly as "in process" — nothing is invented.
 */
export function CredentialLedger({
  title,
  rows,
}: {
  title: string;
  rows: Credential[];
}) {
  return (
    <div>
      <p className="eyebrow-dark mb-4">{title}</p>
      <dl>
        {visible(rows).map((c) => (
          <div key={c.label} className="ledger-row">
            <dt className="text-sm text-concrete/80">
              {c.label}
              {c.note ? (
                <span className="ml-2 text-xs text-concrete/40">{c.note}</span>
              ) : null}
            </dt>
            <dd>
              <StatusValue c={c} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
