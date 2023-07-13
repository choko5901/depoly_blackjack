import React, {useState} from 'react'
import Player from './component/player';
import Dealer from './component/dealer';
import { useSelector } from 'react-redux';

import './css/app.css'
import { winnerJugement } from './function/winnerJugment';

function App() {

  const [isDealerOpen, setIsDealerOpen] = useState(true)
  const dealerFinalScores = useSelector((state)=>state.finalScore.value[0])
  const myFinalScores = useSelector((state)=>state.finalScore.value[1])


  const restart = () =>{
    window.location.reload();
  }

  const stay = () =>{
    setIsDealerOpen(false)
    winnerJugement(myFinalScores, dealerFinalScores)
  }

  return (
    <div className='gameContainer'>
      <Dealer isDealerOpen ={isDealerOpen}></Dealer>
      <Player></Player>
      <div className='btn_container'>
        <button onClick={stay} className='app_btn'>STAY</button>
        <button onClick={restart} className='app_btn'>RESTART</button>
      </div>
    </div>
  );
}

export default App;
