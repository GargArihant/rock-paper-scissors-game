import React, { useContext, useEffect, useState } from 'react'
import HousePick from '../HousePick/HousePick'
import PlayPage from '../PlayPage/PlayPage'
import { ScoreContext } from '../../App'
import { useNavigate } from 'react-router-dom';
function Result() {
  const [score, setScore, pick, setPick, house, setHouse] = useContext(ScoreContext);
  let win;
  const navigate = useNavigate();
  useEffect(() => {
    if (pick == 'paper') {
      if ((house == 2) || (house == 5)) { console.log('win'); win = true} else if (house == 1) {console.log('tie'); win = 'tie'} else {  console.log('lose'); win = false}
    } else if (pick == 'rock') {
      if ((house == 3) || (house == 4)) { console.log('win'); win = true} else if (house == 2) {console.log('tie'); win = 'tie'} else {  console.log('lose'); win = false}
    } else if (pick == 'scissors') {
      if ((house == 4) || (house == 1)) { console.log('win'); win = true } else if (house == 3) {console.log('tie'); win = 'tie'} else { console.log('lose'); win = false}
    } else if (pick == 'lizard') {
      if ((house == 1) || (house == 5)) { console.log('win'); win = true } else if (house == 4) {console.log('tie'); win = 'tie'} else { console.log('lose'); win = false}
    } else if (pick == 'spock') {
      if ((house == 2) || (house == 3)) { console.log('win'); win = true } else if (house == 5) {console.log('tie'); win = 'tie'} else { console.log('lose'); win = false}
    }
  },[])
  
        const playAgain = () => {
          navigate('/')
        }
  return (
    <div className="playpage">
      <PlayPage />
       <div className="center">
          {(win == false)? <h1>YOU LOSE</h1>: (win == 'tie')? <h1>YOU TIED</h1>: <h1>YOU WIN</h1>}
         <button onClick={playAgain}>PLAY AGAIN</button>
          </div>
      <HousePick />
    </div>
    
  )
}

export default Result