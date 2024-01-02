import { useState, useRef } from 'react'
import './Play.css'
const Play = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wronLetters,
    guesses,
    score,
    utilizadas
}) => {

    const [letter, setLetter] = useState('')
    const letterInput = useRef(null)

    const handleSubmit = () => {
        verifyLetter(letter)
        setLetter('')
        letterInput.current.focus()
    }

return(
    <div>
        <h4>Pontuacao: <span className='txt'>{score}</span></h4>
        <h1>Adivinhe a palavra!</h1>
        <h3>Dica: <span className='txt'>{pickedCategory}</span></h3>
        <p>Você ainda possui <span className='txt'>{guesses}</span> tentativas</p>

        <div className='palavra'>
        {letters.map((letter, i) => (
        guessedLetters.includes(letter) ? (<span className='secret' key={i}>{letter}</span>) : (<span className='secret' key={i}></span>)
        ))}
        </div>


        <input type="text" className='inp' ref={letterInput} value={letter} onChange={e => setLetter(e.target.value)}/>
        <button onClick={handleSubmit} className='btnplay'>Jogar</button>

        <p>Letras já utilizadas: {utilizadas.map((letter, i) => (<span className='txt' key={i}>{letter}, </span>))}</p>

    </div>
)
}

export default Play