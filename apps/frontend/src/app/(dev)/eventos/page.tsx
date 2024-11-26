import { eventos } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="flex flex-col rounded-lg bg-zinc-800 w-full overflow-hidden"
        >
          <div className="relative w-full h-52 ">
            <Image
              src={evento.imagem}
              alt={evento.imagem}
              fill
              sizes="auto"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 gap-5 p-7 items-center">
            <span className="font-black text-lg text-center">
              {evento.nome}
            </span>
            <p className="flex-1 text-sm text-zinc-400 text-center">
              {evento.descricao}
            </p>
            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="w-32 h-32"
            />
            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="botao vermelho flex-1"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="botao verde flex-1"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
