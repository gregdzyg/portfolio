import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gregdzyg.onrender.com"),
  title: {
    default: "Grzegorz Dżyg — Java & Spring Developer",
    template: "%s — Grzegorz Dżyg",
  },
  description:
    "Portfolio of Grzegorz Dżyg, a Java and Spring developer building reliable backend systems with Spring Boot, PostgreSQL and React.",
  keywords: [
    "Grzegorz Dżyg",
    "Java Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "PostgreSQL",
    "REST API",
  ],
  authors: [{ name: "Grzegorz Dżyg" }],
  creator: "Grzegorz Dżyg",
  openGraph: {
    title: "Grzegorz Dżyg — Java & Spring Developer",
    description:
      "Reliable backend systems shaped around real requirements, data and delivery.",
    url: "https://gregdzyg.onrender.com",
    siteName: "Grzegorz Dżyg — Portfolio",
    images: [
      {
        url: "/grzegorz-dzyg.jpg",
        width: 1000,
        height: 1000,
        alt: "Grzegorz Dżyg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grzegorz Dżyg — Java & Spring Developer",
    description:
      "Reliable backend systems shaped around real requirements, data and delivery.",
    images: ["/grzegorz-dzyg.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
