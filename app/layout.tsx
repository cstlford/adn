import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "ADN Vending – Smart Vending in Charlotte, NC",
  description:
    "Upgrade your workplace or apartment with hands-free, modern vending and micro-market solutions in Charlotte, NC. Powered by tech. Backed by service.",
  keywords: [
    "vending machines",
    "micro-markets",
    "smart vending",
    "Charlotte NC vending",
    "office vending solutions",
    "ADN Vending",
  ],
  authors: [{ name: "ADN Vending", url: "https://adnvending.org" }],
  openGraph: {
    title: "ADN Vending – Smart Vending in Charlotte, NC",
    description:
      "Charlotte’s modern vending solution for workplaces and apartments. Custom micro-markets and AI-powered vending with full service.",
    url: "https://adnvending.org",
    siteName: "ADN Vending",
    images: [
      {
        url: "https://adnvending.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "ADN Vending Machines in Charlotte, NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADN Vending – Smart Vending in Charlotte, NC",
    description:
      "Modern micro-market and vending solutions for offices and apartments in Charlotte. Tech-driven and hands-free.",
    images: ["https://adnvending.org/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
