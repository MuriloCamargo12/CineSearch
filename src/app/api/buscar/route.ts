import { NextRequest } from "next/server";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_KEY}`,
  },
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url!);
    const query = searchParams.get("query");
    
    if (!query) {
      return Response.json(
        { message: "Parâmetro 'query' é obrigatório" },
        { status: 400 },
      );
    }
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&language=pt-BR`,
      options,
    );
    

    if (!res.ok) {
      throw new Error(`Ocorreu um problema na pesquisa ${res.status}`);
    }

    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json(
      { message: "Erro interno ao pesquisar o conteúdo." },
      { status: 500 },
    );
  }
}
