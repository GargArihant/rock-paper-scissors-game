import React, { useContext, useEffect, useRef, useState } from 'react'
import './PlayPage.css'
import { ScoreContext } from '../../App'
import { useNavigate } from 'react-router-dom';

function PlayPage() {
    const [score, setScore, pick, setPick] = useContext(ScoreContext);
    const navigate = useNavigate();
    // useEffect(() => {
    //   setHouse(Math.floor(Math.random() * (5)) + 1);
    //   if (house) {
    //     console.log('enter');
    //     if (pick == 'paper') {
    //       if ((house == 2) || (house == 5)) { console.log('win'); setWin(true)} else if (house == 1) {console.log('tie'); setWin('tie')} else {  console.log('lose'); setWin(false)}
    //     } else if (pick == 'rock') {
    //       if ((house == 3) || (house == 4)) { console.log('win'); setWin(true)} else if (house == 2) {console.log('tie'); setWin('tie')} else {  console.log('lose'); setWin(false)}
    //     } else if (pick == 'scissors') {
    //       if ((house == 4) || (house == 1)) { console.log('win'); setWin(true) } else if (house == 3) {console.log('tie'); setWin('tie')} else { console.log('lose'); setWin(false)}
    //     } else if (pick == 'lizard') {
    //       if ((house == 1) || (house == 5)) { console.log('win'); setWin(true) } else if (house == 4) {console.log('tie'); setWin('tie')} else { console.log('lose'); setWin(false)}
    //     } else if (pick == 'spock') {
    //       if ((house == 2) || (house == 3)) { console.log('win'); setWin(true) } else if (house == 5) {console.log('tie'); setWin('tie')} else { console.log('lose'); setWin(false)}
    //     }
    //   };
    // },[])
      
    // console.log(house, 'house');
    // const playAgain = () => {
    //   navigate('/')
    // }
    
  return (
        <div className="left">
            <h1>YOU PICKED</h1>
            {(pick == 'paper')?  <div className="paper" style={{ transform: 'scale(2.5)' }}>
        <img src="../../src/assets/images/icon-paper.svg" alt="" />
        </div> : 
         (pick == 'rock')?  <div className="rock" style={{ transform: 'scale(2.5)' }}>
         <img src="../../src/assets/images/icon-rock.svg" alt="" />
         </div> :
         (pick == 'scissors')?  <div className="scissors" style={{ transform: 'scale(2.5)' }}>
         <img src="../../src/assets/images/icon-scissors.svg" alt="" />
         </div> :
         (pick == 'lizard')? <div className="lizard" style={{ transform: 'scale(2.5)' }}>
         <img src="../../src/assets/images/icon-lizard.svg" alt="" />
         </div> : 
         (pick == 'spock')? <div className="spock" style={{ transform: 'scale(2.5)' }}>
        <img src="../../src/assets/images/icon-spock.svg" alt="" />
        </div> : ''
         }
        </div>
        // {/* <div className="center">
        //   {(win == false)? <h1>YOU LOSE</h1>: (win == 'tie')? <h1>YOU TIED</h1>: <h1>YOU WIN</h1>}
        //   <button onClick={playAgain}>PLAY AGAIN</button>
        //   </div> */}
       
  )
}

export default PlayPage