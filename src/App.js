import React, {useState} from 'react'
import Player from './component/player';
import Dealer from './component/dealer';
import { useSelector } from 'react-redux';

function App() {

  const [dealerOpen, setDealerOpen] = useState(true)
  const [checkBlackjack, setcheckBlackjack] = useState(true)

  const dealerFinalScore = useSelector((state)=>state.finalScore.value[0])
  const myFinalScore = useSelector((state)=>state.finalScore.value[1])


  const restart = () =>{
    window.location.reload();
  }

  if(myFinalScore === 21 && checkBlackjack){
    alert("balckJack 승리 게임을 다시 시작 합니다")
    window.location.reload();

  }
  
  const stay = () =>{
    console.log(myFinalScore)

    setDealerOpen(false)
    if(myFinalScore - dealerFinalScore === 0){
      alert("무승부")
    }else if(myFinalScore - dealerFinalScore  > 0){
        if(myFinalScore <= 21){
          alert("승리")
        }else {
          if(dealerFinalScore > 21){
            alert("딜러 버스트로 인한 승리")
          }else{
            alert("패배")
          }
        }
    }else if (myFinalScore - dealerFinalScore  < 0){
          if(dealerFinalScore <= 21){
            alert("패배")
          }else {
            if(dealerFinalScore > 21){
              alert("딜러 버스트로 인한 승리")
            }
          }
    }
  }

  


  return (
    <>
      <Dealer dealerOpen ={dealerOpen}></Dealer>
      <Player setcheckBlackjack={setcheckBlackjack}></Player>
      <button onClick={stay}>STAY</button>
      <button onClick={restart}>RESTAT</button>
    </>
  );
}

export default App;
