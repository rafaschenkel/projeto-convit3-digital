import { Evento } from "core";
import Informacao from "../shared/Informacao";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props;
  return (
    <div className={`flex flex-col gap-2 ${props.className}`}>
      <div className="flex flex-1 gap-4 items-center border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="font-bold text-2xl">{`${evento.alias}:`}</span>
        <p className="text-xl text-zinc-300">{evento.nome}</p>
      </div>
      <div className="flex gap-2 flex-1">
        <Informacao label="Data:">
          {new Date(evento.data!).toLocaleDateString()}
          {" às "}
          {new Date(evento.data!).toLocaleTimeString()}
        </Informacao>
        <Informacao label="Local:">{evento.local}</Informacao>
      </div>
      <Informacao label="Descrição:">{evento.descricao}</Informacao>
    </div>
  );
}
