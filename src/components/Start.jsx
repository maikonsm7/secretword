import './Start.css'
const Start = ({startGame}) => {
return(
    <div className="start">
        <h1>Secret Word</h1>
        <h3>Clieque no botão abaixo para iniciar o jogo</h3>
        <button className="btn" onClick={startGame}>Iniciar Jogo</button>
    </div>
)
}

export default Start