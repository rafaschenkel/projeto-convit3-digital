import Image from "next/image";

export interface EstatisticaProps {
  texto: string;
  valor: any;
  imagem: string;
}

export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className="flex gap-2 items-center bg-zinc-600/40 px-6 py-2 rounded-lg">
      <div className="flex flex-col flex-1">
        <span className="text-sm font-light text-zinc-400">{props.texto}</span>
        <span className="text-2xl font-black">{props.valor}</span>
      </div>
      <Image
        src={props.imagem}
        alt="Ícone"
        width={80}
        height={80}
        priority
        className="w-20 h-20"
      />
    </div>
  );
}
