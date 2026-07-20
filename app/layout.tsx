import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/credentials";

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default:
      "Golden Land Construction & Development Inc. | Design-Build General Contractor — Los Angeles, California",
    template: "%s | Golden Land Construction & Development Inc.",
  },
  description:
    "Golden Land Construction & Development Inc. is a premium design-build general contractor in Los Angeles, California, serving residential, commercial, and public-agency clients. Federally registered (UEI R5TREQY8EJ26) and prepared for government contracting.",
  keywords: [
    "general contractor Los Angeles",
    "commercial contractor California",
    "design-build contractor",
    "government contractor California",
    "public works contractor",
    "concrete contractor Los Angeles",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title:
      "Golden Land Construction & Development Inc. | Design-Build Contractor — Los Angeles",
    description:
      "Premium residential, commercial, and public-agency construction. Federally registered and government-ready.",
    url: company.website,
    siteName: company.legalName,
  },
  robots: { index: true, follow: true },
};

// Entity disambiguation + local SEO. This is the strongest lever to stop other
// "Golden Land" companies from outranking you for your own name.
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.legalName,
  alternateName: "Golden Land",
  url: company.website,
  email: company.contact.email,
  areaServed: "Los Angeles County, California",
  foundingDate: company.founded,
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UEI",
    value: "R5TREQY8EJ26",
  },
  knowsAbout: [
    "Commercial and institutional building construction",
    "Design-build delivery",
    "Concrete, foundations, and framing",
    "Public works construction",
    "Government contracting",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
