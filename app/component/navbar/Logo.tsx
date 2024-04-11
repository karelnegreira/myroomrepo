'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const logo = useRouter();

  return (
    <Image alt="Logo" className="hidden md:block cursor-pointer" height="100" width="100" src="/image/logo.png" />
  )
}

export default Logo