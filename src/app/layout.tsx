import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OSEM Technologies | Digital Solutions Built in Ghana",
  description:
    "OSEM Technologies delivers professional websites, web applications, mobile apps, and cybersecurity solutions for businesses across Ghana and beyond.",
  keywords:
    "web development Ghana, mobile apps Accra, cybersecurity Ghana, payment integration, OSEM Technologies",
  openGraph: {
    title: "OSEM Technologies",
    description: "Professional digital solutions built in Ghana",
    url: "https://osemtech.com",
    siteName: "OSEM Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSEM Technologies",
    description: "Professional digital solutions built in Ghana",
  },
  metadataBase: new URL("https://osemtech.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
