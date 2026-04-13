import { options } from "../route"

export async function GET() {
    try {
        const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=pt-BR", options)
        if(!res.ok) {
            throw new Error(`Erro na API TMDB: ${res.status}`);
        }
        const data = await res.json()
        return Response.json(data)
    }catch {
        return Response.json(
            { message: "Erro interno ao buscar Lançamentos"},
            { status: 500 }
        );
    }
}