import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

import Modal from "./component/modals/Modal";
import Navbar from "./component/navbar/navbar";
import { IoAdd } from "react-icons/io5";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb App",
  description: "This is a clone of Airbnb App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal title="Hello World" isOpen />
        <Navbar />
        {children}
        </body>
    </html>
  );
}
