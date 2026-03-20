import { NextRequest } from "next/server";


export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_KEY}`,
  },
};

export async function GET(req: NextRequest) {
  
  const { searchParams } = new URL(req.url!);
  const query = searchParams.get('query');

  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&language=pt-BR`,
    options,
  );

  const data = await res.json();

  return Response.json(data);
}
