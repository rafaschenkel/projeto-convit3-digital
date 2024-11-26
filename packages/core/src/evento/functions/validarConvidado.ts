import Convidado from "../model/Convidado";

export default function validarConvidado(
  convidado: Partial<Convidado>
): string[] {
  const erros = [];

  if (!convidado.nome) {
    erros.push("Nome é obrigatório");
  }
  if (!convidado.email) {
    erros.push("Email é obrigatório");
  }

  if (
    convidado.possuiAcompanhantes &&
    (!convidado.qtdeAcompanhantes || convidado.qtdeAcompanhantes < 1)
  ) {
    erros.push("Quantidade de acompanhantes é obrigatória");
  }
  return erros;
}
