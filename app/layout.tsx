import { headers } from "next/headers";
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

async function getSiteUrl() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";

  return `${protocol}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getSiteUrl();
  const title = "Godfrey Moves Transport - Premium Passenger Mobility";
  const description =
    "A premium Port Harcourt passenger bus company built on fixed fares, trained crews, visible stops, and real schedules.";

  return {
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
          url: `${siteUrl}/og.png`,
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
      images: [`${siteUrl}/og.png`],
    },
  };
}

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
