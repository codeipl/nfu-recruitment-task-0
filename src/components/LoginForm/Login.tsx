import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' // służy do wykonywania żądań HTTP

import './Login.css'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [answer, setAnswer] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()

    const fetchData = async () => { // pobiera dane z API
        try {
            const response = await axios.get("https://yesno.wtf/api")
            const { answer, image } = response.data
            setAnswer(answer)
            setImage(image)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => { // wywoła funkcję przy renderowaniu komponentu
        fetchData()
    })

    const handleSubmit = () => {
        navigate('/result', { state: { answer: answer, image: image } })
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={ handleSubmit}>
                <label className='label-field' htmlFor='username'>Username:</label>
                <input 
                    className='input-field' 
                    value={ username } onChange={(event) => setUsername(event.target.value)} 
                    type='text' id='username' name='username' 
                    minLength={3} maxLength={10} required placeholder='your_username'/>

                <label className='label-field label-pass' htmlFor='password'>Password:</label>
                <input 
                    className='input-field' 
                    value={ password } onChange={(event) => setPassword(event.target.value)} 
                    type='password' id='password' name='password' 
                    minLength={5} maxLength={10} required placeholder='********'/>
            
                <button className='submit-button' type='submit'>Login</button>
            </form>
        </div>
    );
}
