// CSS
import './App.css';
// React
import { useEffect, useState } from 'react'
// Data
import { wordsList } from './data/words'
// Pages
import Start from './components/Start';
import Play from './components/Play';
import End from './components/End';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'play' },
  { id: 3, name: 'end' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wronLetters, setWronLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)
  const [utilizadas, setUtilizadas] = useState([])

  const initialState = () => {
    setPickedWord('')
    setPickedCategory('')
    setLetters([])
    setWronLetters([])
    setGuessedLetters([])
    setGuesses(3)
    setScore(0)
    setUtilizadas([])
  }

  
  useEffect(()=>{
    if(guesses <= 0){
      setGameStage(stages[2].name)
    }
  },[guesses])

  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)]
    if(uniqueLetters.length === guessedLetters.length && guessedLetters.length > 0){
      setGameStage(stages[2].name)
    }
  },[guessedLetters])

  const verifyLetter = (letter) => {
    const lett = letter.toUpperCase()
    if(guessedLetters.includes(lett) || wronLetters.includes(lett)){
      return
    }
    setUtilizadas(prevUtilizadas => [
      ...prevUtilizadas,
      lett
    ])
    if(letters.includes(lett)){
      setGuessedLetters(prevGuessedLetters => [
        ...prevGuessedLetters,
        lett
      ])
      setScore(prevScore => prevScore + 1)
    }else{
      setWronLetters(prevWronLetters => [
        ...prevWronLetters,
        lett
      ])
      setScore(prevScore => prevScore - 1)
      setGuesses(prevGuesses => prevGuesses - 1)
    }
  }

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    setPickedCategory(category)
    setPickedWord(word.toUpperCase())
    setLetters(word.toUpperCase().split(''))
  }

  const homeGame = () => {
    initialState()
    setGameStage(stages[0].name)
  }

  const startGame = () => { 
    pickWordAndCategory()
    setGameStage(stages[1].name)
  }


  return (
    <div className="App">
      {gameStage === 'start' && <Start startGame={startGame} />}
      {gameStage === 'play' && <Play
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wronLetters={wronLetters}
      guesses={guesses}
      score={score}
      utilizadas={utilizadas}
      />}
      {gameStage === 'end' && <End score={score} homeGame={homeGame} pickedWord={pickedWord}/>}
    </div>
  )
}

export default App; 
