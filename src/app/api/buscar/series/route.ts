import { options } from "../route"

export async function GET() {
    const res = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=pt-BR", options)

    const data = await res.json()

    return Response.json(data)
}