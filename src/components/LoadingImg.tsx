export default function LoadingImg() {
    return (
        <div className="md:h-150 h-90 flex justify-center items-center transition-opacity duration-500 opacity-100">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    )
}