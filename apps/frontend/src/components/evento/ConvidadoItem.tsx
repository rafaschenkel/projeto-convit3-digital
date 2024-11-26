import { Convidado } from "core";

export interface ConvidadoItemProps {
  convidado: Convidado;
}

export default function ConvidadoItem(props: ConvidadoItemProps) {
  return (
    <>
      <li className="flex items-center justify-between px-6 py-3 rounded-lg bg-zinc-950/60 h-20">
        <div className="flex flex-col">
          <span className="font-bold text-xl">{props.convidado.nome}</span>
          <span className="text-zinc-400 text-sm">{props.convidado.email}</span>
        </div>
        {props.convidado.confirmado ? (
          <div className="flex flex-col gap-2 text-sm">
            <span className=" text-sm text-zinc-400">Acompanhantes:</span>
            <span className="text-end text-xl">
              {props.convidado.qtdeAcompanhantes}
            </span>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
}
