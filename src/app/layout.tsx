import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../sections/footer/Footer";

export const metadata: Metadata = {
  title: "FlowSync",
  description:
    "FlowSync helps teams save time and boost productivity by automating repetitive tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
