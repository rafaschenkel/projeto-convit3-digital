import Pagina from "@/components/template/Pagina";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <Pagina>{props.children}</Pagina>;
}
