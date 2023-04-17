import { useLocation } from 'react-router-dom'

export default function Result() {
    const location = useLocation()
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
