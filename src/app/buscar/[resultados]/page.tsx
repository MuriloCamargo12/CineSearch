'use client'
import Loading from "@/app/loading"
import NaoEncontrado from "@/components/NaoEncontrado"
import ResultadoDaPesquisa from "@/components/ResultadoDaPesquisa"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface ResultProps {
    rota: string
    categoria: string
    id: string
    name: string
    title: string
    poster_path: string
    overview: string

}

export default function Resultados() {

    const params = useParams()
    const query = params.resultados

    const [resultado, setResultado] = useState<ResultProps[]>([])
    const [ativo, setAtivo] = useState(false)
    const [selecionado, setSelecionado] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function buscar() {
            setLoading(true)
            const res = await fetch(`/api/buscar/?query=${query}`)
            const data = await res.json()

            setResultado(data.results)
            setLoading(false)
        }
        buscar()
    }, [query])

    const dadosFiltrados = resultado.filter(conteudo => conteudo.poster_path !== null && conteudo.overview !== undefined)

    return (
        <>
            {ativo && <ResultadoDaPesquisa conteudo={selecionado} fechar={() => setAtivo(!ativo)} />}
            <section className="min-h-screen flex flex-col gap-12 py-5 bg-neutral-900 items-center pb-30">
                <div className="w-10/12 mt-2 flex flex-col gap-2">
                    <h1 className="text-2xl font-black">{resultado.length ? 'Resultados' : ''}</h1>
                    {loading ? (
                        <Loading />
                    ) : dadosFiltrados.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {dadosFiltrados.map(conteudo => (
                                <div key={conteudo.id} className="animate-fade-up animate-duration-3000 animate-delay-[1ms]">
                                    <button
                                        className="cursor-pointer translate-y-3 transition-all duration-700 ease-out hover:translate-y-0"
                                        onClick={() => {
                                            setSelecionado(conteudo)
                                            setAtivo(!ativo)
                                        }}
                                    >
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500${conteudo.poster_path}`}
                                            width={400}
                                            height={400}
                                            alt="banner filme/série"
                                            className="rounded-2xl h-95 object-cover"
                                        />
                                    </button>

                                    <div className="flex justify-center mt-3 text-center">
                                        <h1 className="font-black">
                                            {conteudo.name || conteudo.title}
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <NaoEncontrado />
                    )}
                </div>
            </section>
        </>
    )
}