/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import { IconMenu2, IconSearch, IconX, } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [valor, setValor] = useState<string>("")
    const [menu, setMenu] = useState(false)
    const router = useRouter()

    function buscar(valor: string) {
        if (valor === undefined || valor === null || valor.trim() === '') return
        const nome = encodeURIComponent(valor)
        router.push(`/buscar/${nome}`)
        setValor("")
    }
    return (
        <header className="w-full flex justify-center bg-neutral-950/50 border-b border-neutral-800">
            <div className="md:w-10/12 w-full py-2 px-2 md:px-0 md:flex items-center justify-between">
                <div className="flex items-center justify-between px-2">
                    <Link href={"/"}><Image src={'/cinesearch.png'} width={150} height={150} alt="Logo" className="transition-transform duration-700 ease-out hover:scale-105"></Image></Link>
                    <button onClick={() => setMenu(!menu)} className="cursor-pointer">
                        {menu ? <IconX size={40}  className="md:hidden"/> : <IconMenu2 size={40} className="md:hidden" />}
                    </button>
                </div>
                <div>
                    <ul className="hidden md:flex gap-15 text-neutral-400 text-sm">
                        <li><a href="/#filmes" className="transition-all duration-300 hover:text-white">Filmes</a></li>
                        <li><a href="/#series" className="transition-all duration-300 hover:text-white">Séries</a></li>
                        <li><a href="/#desenhos" className="transition-all duration-300 hover:text-white">Desenhos</a></li>
                        <li><a href="/#novidades" className="transition-all duration-300 hover:text-white">Novidades</a></li>
                    </ul>
                </div>
                {menu &&
                    <div className="md:hidden pb-5 md:pb-0">
                        <ul className="flex flex-col items-center gap-5 text-neutral-400 text-sm">
                            <li><a href="/#filmes" className="transition-all duration-300 hover:text-white">Filmes</a></li>
                            <li><a href="/#series" className="transition-all duration-300 hover:text-white">Séries</a></li>
                            <li><a href="/#desenhos" className="transition-all duration-300 hover:text-white">Desenhos</a></li>
                            <li><a href="/#novidades" className="transition-all duration-300 hover:text-white">Novidades</a></li>
                        </ul>
                    </div>}
                <div className="flex bg-neutral-900 px-3 py-2 rounded-2xl justify-between items-center text-center">
                    <input type="text" name="" id="buscar" placeholder="Buscar..." value={valor} className="outline-none text-white w-3/4" onChange={(e) => setValor(e.target.value)} onKeyDown={(e) => e.key === "Enter" && buscar(valor)} />
                    <button className="cursor-pointer text-white" onClick={() => buscar(valor)}>
                        <IconSearch></IconSearch>
                    </button>
                </div>
            </div>
        </header>
    )
}