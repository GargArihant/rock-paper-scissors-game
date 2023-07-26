import React, { useContext, useEffect, useState } from 'react'
import './HousePick.css'
import PlayPage from '../PlayPage/PlayPage'
import { ScoreContext } from '../../App';
function HousePick() {
  const [score, setScore, pick, setPick, house, setHouse] = useContext(ScoreContext)
  useEffect(() => {
    setHouse(Math.floor(Math.random() * (5)) + 1);
  },[])
  return (
    <>
    <div className="right">
    <h1>THE HOUSE PICKED</h1>
    {(house == 1)?  <div className="paper" style={{ transform: 'scale(2.5)' }}>
        <img src="../../src/assets/images/icon-paper.svg" alt="" />
        </div> : 
         (house == 2)?  <div className="rock" style={{ transform: 'scale(2.5)' }}>
         <img src="../../src/assets/images/icon-rock.svg" alt="" />
         </div> :
         (house == 3)?  <div className="scissors" style={{ transform: 'scale(2.5)' }}>
         <img src="../../src/assets/images/icon-scissors.svg" alt="" />
         </div> :
         (house == 4)? <div className="lizard" style={{ transform: 'scale(2.5)' }}>
         <img src="../../src/assets/images/icon-lizard.svg" alt="" />
         </div> : 
         (house == 5)? <div className="spock" style={{ transform: 'scale(2.5)' }}>
        <img src="../../src/assets/images/icon-spock.svg" alt="" />
        </div> : ''
         }
</div>
</>
  )
}

export default HousePick