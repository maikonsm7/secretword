// CSS
import './App.css';
// React
import {useCallback, useEffect, useState} from 'react'
// Data
import {wordsList} from './data/words'
// Pages
import Start from './components/Start';
import Play from './components/Play';
import End from './components/End';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'play'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const startGame = () => {
    setGameStage(stages[1].name)
  }
  
  return (
    <div className="App">
      {gameStage === 'start' && <Start startGame={startGame}/>}
      {gameStage === 'play' && <Play/>}
      {gameStage === 'end' && <End/>}
    </div>
  )
}

export default App;
