/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react";
import Image from "next/image";
import Conteudo from "@/types/Conteudo";
import { Navigation } from "swiper/modules";
import ResultadoDaPesquisa from "./ResultadoDaPesquisa";
import Loading from "@/app/loading";


interface SlideProps {
    rota: string
    categoria: string
    id: string

}

export default function Slide(props: SlideProps) {

    const [conteudos, setConteudos] = useState<Conteudo[]>([])
    const [ativo, setAtivo] = useState(false)
    const [selecionado, setSelecionado] = useState({})
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    if(erro) {
        throw new Error(erro)
    }

    useEffect(() => {
        async function buscar() {
            try {
                setLoading(true)
                const res = await fetch(props.rota)
                if(!res.ok) {
                    const dataErro = await res.json()
                    throw new Error(dataErro.message || "Erro na requisição!")
                }
                const data = await res.json()
                setConteudos(data.results)
            }catch (error: any) {
                setErro(error)
            }finally {
                setLoading(false)
            }
        }

        buscar()
    }, [props.rota])

    return (
        <>
            {ativo && <ResultadoDaPesquisa conteudo={selecionado} fechar={() => setAtivo(!ativo)} />}
                {loading ? (
                    <Loading/>
                ): 
            <section className="flex justify-center" id={props.id}>
                <div className="w-10/12 mt-2 flex flex-col gap-2">
                    {conteudos.length > 0 ? <h1 className="text-2xl font-black">{props.categoria}</h1> : ""}
                    <div className="animate-fade-up animate-duration-3000 animate-delay-[1ms]">
                        <Swiper spaceBetween={15} slidesPerView={5} modules={[Navigation]} navigation
                            breakpoints={{
                                320: {
                                    slidesPerView: 1, 
                                },
                                640: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3, 
                                },
                                1024: {
                                    slidesPerView: 5, 
                                },
                            }}>
                            {conteudos.map(conteudo => (
                                <SwiperSlide key={conteudo.id}>
                                    <button className="cursor-pointer translate-y-3 transition-all duration-700 ease-out hover:translate-y-0" onClick={() => {
                                        setAtivo(!ativo)
                                        setSelecionado(conteudo)
                                    }}>
                                        <Image src={`https://image.tmdb.org/t/p/w500/${conteudo.poster_path}`} width={400} height={400} alt="banner filme/série"
                                            className="rounded-2xl h-95">
                                        </Image>
                                    </button>
                                    <div className="flex justify-center mt-3">
                                        <h1 className="font-black">{conteudo.name ? conteudo.name : conteudo.title}</h1>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
                }
        </>
    )
}