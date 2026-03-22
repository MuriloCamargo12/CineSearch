export default function notFound() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-neutral-900">
            <div className="flex flex-col items-center justify-center mb-20 gap-2">
                <h1 className="text-4xl">404</h1>
                <p className="text-3xl">Ops! Parece que você se perdeu.</p>
                <p className="text-3xl">A página que você tentou acessar não existe.</p>
            </div>
        </div>
    )
}