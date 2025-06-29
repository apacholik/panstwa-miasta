import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import "~/styles/stack.css";

const geistSans = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

const geistMono = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Państwa miasta",
  description: "Zagraj ze znajomymi w państwa miasta!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/the-new-css-reset@1/css/reset.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
