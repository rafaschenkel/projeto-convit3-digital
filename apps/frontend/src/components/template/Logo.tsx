import Image from "next/image";
import Link from "next/link";
import { Righteous } from "next/font/google";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-2 items-center">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={50}
        height={50}
        priority
        className="w-12 h-12"
      />
      <h1 className={`${fonte} text-lg flex flex-col leading-5`}>
        <div>
          CONVIT<span className="text-blue-500">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
