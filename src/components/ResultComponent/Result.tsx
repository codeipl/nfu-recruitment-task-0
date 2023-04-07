import { useLocation } from 'react-router-dom'

import './Result.css'

export default function Result() {
    const location = useLocation() // zwraca obiekt zawierający aktualny adres URL oraz informacje o jego stanie
    const { answer, image } = location.state

    return (
        <div className='container'>
            <div className='left-side'>
                <h1>{ answer }</h1>
            </div>
            <div className='right-side'>
                <img className='response-image' src={ image } alt="API Response Image" />
            </div>
        </div>
    )
}
