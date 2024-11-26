import Evento from "./model/Evento";
import Convidado from "./model/Convidado";
import complementarEvento from "./functions/complementarEvento";
import criarEventoVazio from "./functions/criarEventoVazio";
import complementarConvidado from "./functions/complementarConvidado";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";

export type { Evento, Convidado };

export {
  complementarEvento,
  criarEventoVazio,
  complementarConvidado,
  criarConvidadoVazio,
};
