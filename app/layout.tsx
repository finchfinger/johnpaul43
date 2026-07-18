import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Paul Wolforth for 43rd Ward Alderman",
  description: "A people-led campaign using design thinking to build a 43rd Ward that works for everyone.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
