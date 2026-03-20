/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconX } from "@tabler/icons-react"
import Image from "next/image"


export default function ResultadoDaPesquisa(props: any) {
    const dataLancamento = new Date(props.conteudo.release_date).toLocaleDateString("pt-BR")
    const dataAr = new Date(props.conteudo.first_air_date).toLocaleDateString("pt-BR")
    
    const nota = Math.ceil(props.conteudo.vote_average)
    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

            <div className="
      bg-neutral-900 rounded-2xl w-full max-w-5xl
      flex flex-col md:flex-row gap-5
      p-4 md:p-6
      animate-jump-in animate-duration-500
      max-h-[90vh] overflow-y-auto
    ">
                <div className="w-full md:w-1/2">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${props.conteudo.poster_path}`}
                        width={300}
                        height={300}
                        alt="Poster"
                        className="rounded-2xl w-full h-auto md:h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <div className="flex justify-between items-start md:items-center gap-3">
                        <h1 className="text-xl md:text-3xl font-bold leading-snug">
                            {props.conteudo.name || props.conteudo.title}
                        </h1>

                        <button
                            className="cursor-pointer shrink-0"
                            onClick={() => props.fechar()}
                        >
                            <IconX
                                size={32}
                                className="hover:text-red-500 transition-all duration-300"
                            />
                        </button>
                    </div>
                    <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                        {props.conteudo.overview}
                    </p>
                    <div className="font-bold flex gap-3 items-center">
                        Nota:
                        <span
                            className={`font-black px-2 py-1 rounded-full flex items-center text-sm
              ${nota >= 8
                                    ? "bg-green-500"
                                    : nota >= 5
                                        ? "bg-yellow-500"
                                        : "bg-red-500"}`}
                        >
                            {nota}
                        </span>
                    </div>
                    <span className="font-bold text-sm md:text-base">
                        {dataLancamento === 'Invalid Date' ? `Data de Lançamento: ${dataAr} ` : `Data de Lançamento: ${dataLancamento}`}
                    </span>
                </div>
            </div>
        </div>
    )
}