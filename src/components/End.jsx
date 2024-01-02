const End = ({score, homeGame, pickedWord}) => {
    return(
        <div>
            <h1>Fim de Jogo!</h1>
            <h3>Palavra: {pickedWord}</h3>
            <h3>Pontuacao Final: {score}</h3>
            <button className="btn" onClick={homeGame}>Voltar ao início</button>
        </div>
    )
    }
    
    export default End