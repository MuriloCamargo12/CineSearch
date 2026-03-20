export default function NaoEncontrado() {
    return (
        <div className="flex items-center flex-col md:mt-55 mt-10 gap-5 font-bold">
            <span className="text-3xl">Não encontramos resultados de Filmes ou Séries</span>
            <span className="text-3xl">Verifique se digitou corretamente ou tente uma nova busca.</span>
            <label htmlFor="buscar" className="bg-neutral-950 p-3 rounded-2xl cursor-pointer transition-transform duration-500 hover:-translate-y-2">Nova busca</label>
        </div>
    )
}