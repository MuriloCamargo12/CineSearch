'use client'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div className="min-h-screen flex justify-center items-center bg-neutral-900">
            <div className="flex flex-col items-center justify-center mb-20 gap-2">
                <h1 className="text-4xl">Algo deu errado!</h1>
                <p className="text-3xl">{error.message}</p>
                <button className="text-2xl p-2 rounded-2xl bg-neutral-950 transition-all duration-300 hover:bg-neutral-700 cursor-pointer" onClick={() => reset()}>
                    Tentar novamente
                </button>
            </div>
        </div>
    )
}