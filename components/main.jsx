import Confetti from 'react-confetti'

export default function Main(props){
  const diceFaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

  const buttonlist = props.num.map(pre=>(<button onClick={()=>props.blink(pre.id)} 
                                          className={pre.isHeld? "dice-change on": "dice-change"} 
                                          aria-pressed={pre.isHeld}
                                          aria-label={`Die with value ${pre.value}, 
                                          ${pre.isHeld ? "held" : "not held"}`}
                                          key={pre.id}>
                                            {diceFaces[pre.value - 1]}
                                          </button>))




  console.log(buttonlist)
  return(
    <main>  
        <div aria-live="polite" className="sr-only">
                {props.gameWonValue && <p>Congratulations! You won! Press "New Game" to start again.</p>}
        </div> 
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> 
        <div className="dice-container">
          {buttonlist}
        </div>      
        {props.gameWonValue? <>
                        <Confetti/> 
                        <h3>🎉You Won🎉</h3>
                        </>
                          : null}
        <button ref= {props.buttomref} className="roll-dice" onClick={()=>{
        props.gameWonValue ? props.resetGame() : props.toggle()
        }}>{props.gameWonValue? "New Game" : "Roll"}</button>
    </main>
  )
}