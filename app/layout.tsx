import type { Metadata } from "next";
import "./globals.css";

const themeScript = `
(() => {
  try {
    const key = "gmt-theme";
    const stored = window.localStorage.getItem(key);
    const theme = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

// Set NEXT_PUBLIC_SITE_URL in the Vercel project settings once the production
// domain is live, so share previews point at the real site rather than at a
// preview deployment's generated URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Godfrey Moves Transport - Premium Passenger Mobility";
const description =
  "A premium Port Harcourt passenger bus company built on fixed fares, trained crews, visible stops, and real schedules.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Godfrey Moves Transport",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Godfrey Moves Transport bus and route poster",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
