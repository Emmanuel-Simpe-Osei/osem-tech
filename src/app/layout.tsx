import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://osemtech.com";
const description =
  "OSEM Technologies delivers professional websites, web applications, mobile apps, and cybersecurity solutions for businesses across Ghana and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OSEM Technologies | Digital Solutions Built in Ghana",
    template: "%s | OSEM Technologies",
  },
  description,
  applicationName: "OSEM Technologies",
  keywords: [
    "OSEM Technologies",
    "web development Ghana",
    "website design Accra",
    "web application development Ghana",
    "mobile apps Accra",
    "cybersecurity Ghana",
    "payment integration Ghana",
    "software company Ghana",
  ],
  authors: [{ name: "OSEM Technologies", url: siteUrl }],
  creator: "OSEM Technologies",
  publisher: "OSEM Technologies",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "OSEM Technologies | Digital Solutions Built in Ghana",
    description,
    url: siteUrl,
    siteName: "OSEM Technologies",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSEM Technologies | Digital Solutions Built in Ghana",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#00004E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OSEM Technologies",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  description,
  email: "adminosemtech@gmail.com",
  telephone: "+233256364076",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  areaServed: { "@type": "Country", name: "Ghana" },
  knowsAbout: [
    "Website Development",
    "Web Applications",
    "Mobile Apps",
    "Cybersecurity",
    "Payment Integration",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
