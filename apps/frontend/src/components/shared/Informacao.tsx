export interface InformacaoProps {
  label: string;
  children: any;
}

export default function Informacao(props: InformacaoProps) {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-start border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="font-bold text-zinc-400">{props.label}</span>
        <div className="text-xl">{props.children}</div>
      </div>
    </div>
  );
}
