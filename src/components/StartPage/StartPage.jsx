import React, { useContext, useEffect } from 'react'
import './StartPage.css';
import { ScoreContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const [score, setScore, pick, setPick] = useContext(ScoreContext);
  const navigate = useNavigate();
    const pickPaper = () => {
      setPick('paper');
      navigate('/house')
    }
    const pickRock = () => {
      setPick('rock');
      navigate('/house')
    }
    const pickSciss = () => {
      setPick('scissors');
      navigate('/house')
    }
    const pickLiz = () => {
      setPick('lizard');
      navigate('/house')
    }
    const pickSpock = () => {
      setPick('spock');
      navigate('/house')
    }

 
  return (
    <>
    <div className='startPage'>
      <div className="paper" onClick={pickPaper}>
        <img src="../../src/assets/images/icon-paper.svg" alt="" />
        </div>
        <div className="rock-scissors" >
        <div className="rock" onClick={pickRock}>
        <img src="../../src/assets/images/icon-rock.svg" alt="" />
        </div>
        <div className="scissors" onClick={pickSciss}>
        <img src="../../src/assets/images/icon-scissors.svg" alt="" />
        </div>
        </div>
        <div className="lizard-spock" >
        <div className="lizard" onClick={pickLiz}>
        <img src="../../src/assets/images/icon-lizard.svg" alt="" />
        </div>
        <div className="spock" onClick={pickSpock}>
        <img src="../../src/assets/images/icon-spock.svg" alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default StartPage