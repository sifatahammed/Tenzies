import Main from "../components/main.jsx"
import React from "react";
import { nanoid } from "nanoid"

export default function App() {
  const [num, setnum] = React.useState(Array.from({ length: 10 }, () => ({ value: Math.floor(Math.random() * 6) + 1, isHeld: false, id : nanoid() }))
  )
  const buttonRef = React.useRef(null)
  console.log(num.length)
  function numgen(){
    const rand_num = num.map((prev)=>(
      !prev.isHeld ? {...prev, value: Math.floor(Math.random()*6)+1, 
        isHeld: false, 
        id: nanoid() }: prev))
    setnum(rand_num)
  } 
  
  const allHeld = num.every(die => die.isHeld);
  const firstValue = num[0].value;
  const allSameValue = num.every(die => die.value === firstValue);
  const gameWonValue = allHeld && allSameValue 
        
  React.useEffect(() => {
      if (gameWonValue && buttonRef.current) {
          buttonRef.current.focus()
  }}, [gameWonValue])
  

  function blink(id){
    const updated = num.map((prev)=>(
      prev.id === id? {...prev, isHeld: !prev.isHeld }: prev))
    setnum(updated)
  }

  // function reblink(gameWonValue){
  //   if (gameWonValue) {
  //     setnum(prev => prev.map(die => ({ ...die, isHeld: false })));
  //   }  
  // }

  function resetGame() {
    setnum(Array.from({ length: 10 }, () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    })));
}

  return (
    <Main toggle = {numgen} buttomref= {buttonRef} gameWonValue = {gameWonValue} num ={num} resetGame ={resetGame} blink = {blink}/>
  )
}

