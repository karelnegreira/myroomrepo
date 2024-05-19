import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

import Modal from "./component/modals/Modal";
import Navbar from "./component/navbar/navbar";
import { IoAdd } from "react-icons/io5";
import RegisterModal from "./component/modals/RegisterModal";
import ClientOnly from "./component/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./component/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb App",
  description: "This is a clone of Airbnb App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
            <LoginModal />
            <RegisterModal/>
            <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
