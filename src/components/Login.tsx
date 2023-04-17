import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import mainImg from '../assets/main.jpg'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [answer, setAnswer] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await axios.get("https://yesno.wtf/api")
            const { answer, image } = response.data
            setAnswer(answer)
            setImage(image)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    })

    const handleSubmit = () => {
        navigate('/result', { state: { answer: answer, image: image } })
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' 
                    src={ mainImg } alt='Main'/>
            </div>
            <div className='flex items-center justify-center bg-[#2e4d41]'>
                <form 
                    className='rounded-lg shadow-2xl bg-[#738b73] p-8 mx-4'>

                    <h1 className='text-4xl font-bold uppercase text-white text-center'>Welcome</h1>
                    <div>
                        <label className='block text-[#1d3329] text-sm font-bold py-2 mt-4'>Username</label>
                        <input
                            className={`w-full rounded border-2 text-[#1d3329] py-1 px-2 outline-none transition-all duration-200 ease-linear hover:border-[#2e4d41] focus:bg-[#2e4d41] focus:border-[#2e4d41] focus:text-white`}
                            type='text' />
                    </div>
                    <div>
                        <label className='block text-[#1d3329] text-sm font-bold py-2'>Password</label>
                        <input 
                            className={`w-full rounded border-2 text-[#1d3329] py-1 px-2 outline-none transition-all duration-200 ease-linear hover:border-[#2e4d41] focus:bg-[#2e4d41] focus:border-[#2e4d41] focus:text-white`}
                            type='password' />
                    </div>
                    <button 
                        className='w-full h-9 border-2 border-[#2e4d41] bg-[#2e4d41] text-white font-semibold shadow-lg rounded-lg mt-4 transition-all duration-300 ease-linear hover:bg-white hover:text-black'
                        type='submit'>
                            Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
