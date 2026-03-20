import { options } from "../route"

export async function GET() {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?&language=pt-BR&with_genres=16", options)

    const data = await res.json()

    return Response.json(data)
}