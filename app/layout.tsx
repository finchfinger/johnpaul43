import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Paul Wolforth for 43rd Ward Alderman",
  description: "A people-led campaign to build a 43rd Ward that works for everyone.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
