import { Convidado } from "core";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadoProps {
  convidados: Convidado[];
  label: string;
}

export default function ListaConvidado(props: ListaConvidadoProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <span>{props.label}</span>
      <ul className="flex flex-col gap-2">
        {props.convidados.map((convidado) => (
          <ConvidadoItem convidado={convidado} key={convidado.id} />
        ))}
      </ul>
    </div>
  );
}
