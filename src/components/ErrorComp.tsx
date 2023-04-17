export default function Error () {
    return (
        <div className="h-screen w-full bg-[#2e4d41] flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold uppercase text-white text-center">Oops.. An error occurred</h1>
            <button 
                className='py-2 px-4 mt-12 text-white font-semibold rounded-lg transition-all duration-300 ease-linear hover:bg-white hover:text-[#1d3329]'>
                    Try again
            </button>
        </div>
    )
}