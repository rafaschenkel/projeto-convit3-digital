import LogoGrande from "@/components/template/LogoGrande";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen bg-[url('/bg-inicio.svg')] bg-cover">
      <div className="flex flex-col gap-4 items-center">
        <LogoGrande />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerencie o convite do seu evento de forma rápida, fácil e sem
          complicações!
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">
        Crie seu Evento
      </Link>
    </div>
  );
}
