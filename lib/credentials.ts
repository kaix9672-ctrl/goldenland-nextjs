/**
 * SINGLE SOURCE OF TRUTH for Golden Land's government identifiers, registrations,
 * and compliance credentials.
 *
 * HOW PLACEHOLDERS WORK (Phase 7):
 *   status: "active"  -> value is shown normally
 *   status: "pending" -> value is shown as a muted "In process / Coming soon" chip
 *   status: "hidden"  -> the row is not rendered at all (use for things not yet applicable)
 *
 * The founder updates ONE file. When a real number arrives (e.g. CAGE, CSLB,
 * DIR), set status to "active" and paste the value. Nothing else needs to change.
 *
 * NOTHING here is fabricated. Every value is either verified-real or a clearly
 * marked placeholder.
 */

export type CredStatus = "active" | "pending" | "hidden";

export interface Credential {
  label: string;
  value: string; // real value when active; short placeholder text otherwise
  status: CredStatus;
  note?: string;
}

export const company = {
  legalName: "Golden Land Construction & Development Inc.",
  shortName: "Golden Land",
  entityType: "California Corporation",
  founded: "2021",
  headquarters: "Los Angeles County, California",
  website: "https://goldenlandconstruction.com",
  // General customer inquiries (homepage, footer, contact form, residential/commercial).
  contact: {
    email: "info@goldenlandconstruction.com", // confirm / create this alias
  },
  // Government procurement contact. Uses the single active info@ alias
  // (founder decision 2026-07-20: no government@ alias exists — do not reintroduce it).
  procurement: {
    name: "Government Contracts Office", // replace with a named contact
    email: "info@goldenlandconstruction.com",
    phone: "", // add a direct line when available
  },
} as const;

/** Federal identifiers + registrations. */
export const federal: Credential[] = [
  { label: "UEI (Unique Entity ID)", value: "R5TREQY8EJ26", status: "active" },
  { label: "SAM.gov Registration", value: "Submitted — in process", status: "pending" },
  { label: "CAGE Code", value: "Pending assignment", status: "pending" },
];

/** State / license / compliance registrations. */
export const stateCompliance: Credential[] = [
  { label: "CSLB Contractor License", value: "Coming soon", status: "pending", note: "California Contractors State License Board" },
  { label: "DIR Public Works Registration", value: "Coming soon", status: "pending", note: "Dept. of Industrial Relations" },
  { label: "CA Small Business (SB) Certification", value: "Coming soon", status: "pending", note: "DGS / Cal eProcure" },
  { label: "General Liability Insurance", value: "To be confirmed", status: "pending" },
  { label: "Workers' Compensation", value: "To be confirmed", status: "pending" },
  { label: "Bonding Capacity", value: "In development", status: "pending" },
];

/** NAICS codes — primary first. Keep this list tight and truthful. */
export const naics = {
  primary: { code: "236220", label: "Commercial & Institutional Building Construction" },
  additional: [
    "423320",
    "423390",
    "423850",
    "424120",
    "424690",
    "488510",
    "492110",
    "492210",
    "493110",
    "541512",
    "541519",
    "561210",
    "561720",
    "561790",
  ],
};

/** Product/Service Codes. */
export const psc: string[] = ["R499", "S201", "S299", "V112"];

/** Helper: rows to actually render (drops hidden). */
export const visible = (rows: Credential[]) => rows.filter((r) => r.status !== "hidden");
