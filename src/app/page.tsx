import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-12 py-5 bg-neutral-900 pb-20">
        <Slide rota="/api/buscar/lancamentos" categoria="Novidades" id="novidades"/>
        <Slide rota="/api/buscar/filmes" categoria="Filmes" id="filmes"/>
        <Slide rota="/api/buscar/series" categoria="Séries" id="series"/>
        <Slide rota="/api/buscar/desenhos" categoria="Desenhos" id="desenhos"/>
    </div>
  );
}
