import type { Metadata } from "next";
import "../styles/main.scss";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Lendsqr-fe-test",
  description: "Developed by Emmanuel Ogunmola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
