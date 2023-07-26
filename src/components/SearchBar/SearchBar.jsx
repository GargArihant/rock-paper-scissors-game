import React, { useContext, useRef } from 'react'
import './SearchBar.css'
import { ScoreContext } from '../../App'
import { Outlet } from 'react-router-dom';

function SearchBar() {
  const [score, setScore] = useContext(ScoreContext);
  const RulesRef = useRef(null);
  const visibilityRef = useRef(null);
  const showRules = () => {
    RulesRef.current.style.opacity = '0.8';
    visibilityRef.current.style.visibility= 'visible';
  }
  const closeRules = () => {
    visibilityRef.current.style.visibility= 'hidden';
    RulesRef.current.style.opacity = '1';
  }
  return (
    <> <div className="container" ref={RulesRef}>
    <div className="searchbar">
      <div className='options'>
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
        <h1>LIZARD</h1>
        <h1>SPOCK</h1>
      </div>
      <div className="score">
        <h2>SCORE</h2>
        <span>{score}</span>
      </div>
    </div>
    <Outlet />
    <button onClick={showRules}>
    <div className="rules">
      <h3>RULES</h3>
    </div>
    </button>
    </div>
    <div className="rules-img" ref={visibilityRef}>
      <h3>RULES</h3>
      <button className='close' onClick={closeRules}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
      </button>
    </div>
    </>
  )
}

export default SearchBar