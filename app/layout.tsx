import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Volera",
  description: "Elegance Redefined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
