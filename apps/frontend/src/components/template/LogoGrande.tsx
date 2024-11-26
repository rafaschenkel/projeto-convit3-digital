import Image from "next/image";
import Link from "next/link";
import { Righteous } from "next/font/google";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function LogoGrande() {
  return (
    <Link href={"/"} className="flex flex-col gap-4 items-center">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={100}
        height={100}
        className="w-24 h-24"
      />
      <h1 className={`${fonte} text-5xl`}>
        CONVIT<span className="text-blue-500">3</span> DIGITAL
      </h1>
    </Link>
  );
}
