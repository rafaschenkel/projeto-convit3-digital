import { Injectable } from "@nestjs/common";
import { Convidado, Evento } from "core";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async salvar(evento: Evento) {
    return this.prisma.evento.create({
      data: {
        ...evento,
        convidados: { create: evento.convidados },
      },
    });
  }

  async salvarConvidado(evento: Evento, convidado: Convidado) {
    return this.prisma.convidado.create({
      data: {
        ...convidado,
        qtdeAcompanhantes: +(convidado.qtdeAcompanhantes ?? 0),
        evento: {
          connect: {
            id: evento.id,
          },
        },
      },
    });
  }

  async buscarTodosEventos(): Promise<Evento[]> {
    return this.prisma.evento.findMany() as any;
  }

  async buscarPorId(id: string, completo: boolean): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      where: { id },
      include: { convidados: completo },
    }) as any;
  }

  async buscarPorAlias(
    alias: string,
    completo: boolean = false
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      select: {
        id: true,
        alias: true,
        data: true,
        descricao: true,
        local: true,
        nome: true,
        imagem: true,
        imagemBackground: true,
        publicoEsperado: completo,
        senha: completo,
        convidados: completo,
      },
      where: { alias },
    }) as any;
  }
}
