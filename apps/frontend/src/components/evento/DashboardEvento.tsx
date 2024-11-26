import { Convidado, Evento } from "core";
import InformacoesEvento from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidado from "./ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <InformacoesEvento evento={props.evento} className="flex-1" />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <Estatistica
          texto="Expectativa de Convidados:"
          valor={props.evento.publicoEsperado}
          imagem={"/icones/convidados.svg"}
        />
        <Estatistica
          texto="Confirmados:"
          valor={props.presentes.length}
          imagem={"/icones/confirmados.svg"}
        />
        <Estatistica
          texto="Acompanhantes:"
          valor={props.totalGeral}
          imagem={"/icones/acompanhantes.svg"}
        />
      </div>

      <button className="botao azul self-end mt-10">
        <span>Atualizar lista de convidados</span>
      </button>

      <div className="flex gap-2 mt-4">
        <ListaConvidado
          label="Confirmaram presença:"
          convidados={props.presentes}
        />
        <ListaConvidado
          label="Confirmaram ausência:"
          convidados={props.ausentes}
        />
      </div>
    </div>
  );
}
