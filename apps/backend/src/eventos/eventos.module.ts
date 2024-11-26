import { Module } from "@nestjs/common";
import { EventosController } from "./eventos.controller";
import { EventoPrisma } from "./evento.prisma";
import { DbModule } from "src/db/db.module";

@Module({
  imports: [DbModule],
  controllers: [EventosController],
  providers: [EventoPrisma],
})
export class EventosModule {}
