import { useLocation } from 'react-router-dom'

export default function Result() {
    const location = useLocation()
    const { answer, image } = location.state

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className="flex items-center justify-center bg-[#2e4d41]">
                <h1 className="text-4xl font-bold uppercase text-white text-center">
                    { answer }
                </h1>
            </div>
            <div className='flex items-center justify-center bg-[#738b73]'>
                <img className="m-auto px-4" src={ image } alt='API Response'/>
            </div>
        </div>
    );
}
