import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'
import mainImg from '../assets/main.jpg'

type FormData = {
    username: string;
    password: string;
};

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()

    const onSubmit = async () => {
        try {
            const response = await axios.get("https://yesno.wtf/api")
            const { answer, image } = response.data

            console.log(answer, image)

            navigate(`/result/${answer}/${encodeURIComponent(image)}`, { replace: false })
        } catch (error) {
            console.error(error)
            
            navigate(`/error/${error}`)
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' 
                    src={ mainImg } alt='Main'/>
            </div>
            <div className='flex items-center justify-center bg-[#2e4d41]'>
                <form 
                    className='rounded-lg shadow-2xl bg-[#738b73] p-8 mx-4'
                    onSubmit={ handleSubmit(onSubmit) }>

                    <h1 className='text-4xl font-bold uppercase text-white text-center'>Welcome</h1>
                    <div>
                        <label className='block text-[#1d3329] text-sm font-bold py-2 mt-4'>Username</label>
                        <input
                            className={`w-full rounded border-2 text-[#1d3329] py-1 px-2 outline-none transition-all duration-200 ease-linear hover:border-[#2e4d41] focus:bg-[#2e4d41] focus:border-[#2e4d41] focus:text-white
                            ${errors.username ? "border-red-400 hover:border-red-500" : "border-transparent"}`}
                            type='text' {...register("username", { required: true })}/>
                        <span 
                            className='text-white text-sm'
                            style={{ visibility: errors.username ? "visible" : "hidden" }}>
                                This field is required!
                        </span>
                    </div>
                    <div>
                        <label className='block text-[#1d3329] text-sm font-bold py-2'>Password</label>
                        <input 
                            className={`w-full rounded border-2 text-[#1d3329] py-1 px-2 outline-none transition-all duration-200 ease-linear hover:border-[#2e4d41] focus:bg-[#2e4d41] focus:border-[#2e4d41] focus:text-white
                            ${errors.password ? "border-red-400 hover:border-red-500" : "border-transparent"}`}
                            type='password' {...register("password", { required: true })}/>
                        <span 
                            className='text-white text-sm'
                            style={{ visibility: errors.password ? "visible" : "hidden" }}>
                                This field is required!
                        </span>
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
