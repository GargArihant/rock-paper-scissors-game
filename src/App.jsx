import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import StartPage from './components/StartPage/StartPage';
import PlayPage from './components/PlayPage/PlayPage';
import HousePick from './components/HousePick/HousePick';
import Result from './components/Result/Result';

export const ScoreContext = React.createContext();

function App() {
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState('');
  const [house, setHouse] = useState();

  return (
    <>
      <ScoreContext.Provider value={[score, setScore, pick, setPick, house, setHouse]}>
       <Routes>
        <Route path='/' element={<SearchBar />}>
        <Route index element={<StartPage />} />
        <Route path='/play' element={<PlayPage />}></Route>
        <Route path='/house' element={<Result />}></Route>
        </Route>
       </Routes>
       </ScoreContext.Provider>
    </>
  )
}

export default App
