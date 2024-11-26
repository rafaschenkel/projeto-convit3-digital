import { eventos } from "core";
import { PrismaClient } from "@prisma/client";

async function seed() {
  const prisma = new PrismaClient();

  const transacoes = eventos.map(
    async ({
      id,
      alias,
      data,
      nome,
      senha,
      descricao,
      local,
      publicoEsperado,
      imagem,
      imagemBackground,
      convidados,
    }) => {
      await prisma.evento.create({
        data: {
          id,
          alias,
          data,
          nome,
          senha,
          descricao,
          local,
          publicoEsperado,
          imagem,
          imagemBackground,
          convidados: {
            create: convidados.map(
              ({
                id,
                nome,
                email,
                confirmado,
                possuiAcompanhantes,
                qtdeAcompanhantes,
              }) => ({
                id,
                nome,
                email,
                confirmado,
                possuiAcompanhantes,
                qtdeAcompanhantes,
              })
            ),
          },
        },
      });
    }
  );

  await Promise.all(transacoes);
}

seed();
