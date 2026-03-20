/* eslint-disable @next/next/no-html-link-for-pages */
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex bg-neutral-950/50 w-full flex-col  border-t border-neutral-800">
            <div className="flex justify-center px-3 md:px-0">
                <div className="md:w-10/12 w-full flex flex-col md:flex-row justify-between border-b border-neutral-800 py-12 gap-5">
                    <div className="md:w-96 w-full flex flex-col gap-3">
                        <Image src={'/cinesearch.png'} width={150} height={150} alt="Logo"></Image>
                        <div className="text-sm text-neutral-400">
                            <p>Explore o universo do entretenimento em um só lugar. Descubra filmes, séries, desenhos e os principais lançamentos, com sinopses, avaliações e tudo o que você precisa para escolher o que assistir.</p>
                        </div>
                    </div>
                    <div className="md:w-96 flex flex-col md:items-center gap-3">
                        <h2 className="font-bold">Redes Sociais</h2>
                        <ul className="flex gap-5">
                            <li><a href="https://github.com/MuriloCamargo12" target="_blank"><IconBrandGithub size={50} className="text-neutral-400 transition-all duration-300 hover:text-white" /></a></li>
                            <li><a href="https://www.linkedin.com/in/murilo-camargo-morais-9b94463b2/" target="_blank"><IconBrandLinkedin size={50} className="text-neutral-400 transition-all duration-300 hover:text-white"/></a></li>
                        </ul>
                    </div>
                    <div className="md:w-96 flex flex-col md:items-center gap-3">
                        <h2 className="font-bold">Informações</h2>
                        <ul className="flex flex-col gap-3 text-neutral-400">
                            <li><a href="/#filmes" className="transition-all duration-300 hover:text-white">Filmes</a></li>
                            <li><a href="/#series" className="transition-all duration-300 hover:text-white">Séries</a></li>
                            <li><a href="/#desenhos" className="transition-all duration-300 hover:text-white">Desenhos</a></li>
                            <li><a href="/#novidades" className="transition-all duration-300 hover:text-white">Novidades</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-3 md:px-0">
                <div className="md:w-10/12 w-full py-12 text-neutral-400 text-sm">
                    <p>Todos os direitos reservados - CineSearch © {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}