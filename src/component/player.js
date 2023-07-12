import React, {useEffect, useState} from 'react'
import "../css/player.css"
import { useDispatch, useSelector } from 'react-redux'
import {scoreCal} from '../function/scoreCal'
import {myFinalScore} from '../slice/scoreSlice'




const Player = ({setcheckBlackjack})=>{

    const myTurnCard = useSelector((state)=>state.initCardDeck.value)
    const [myCard , setMycard] =useState();
    const [myScore, setMyScore] = useState(0);
    const [nextCard, setNextCard] = useState(0);
    
    const dispatch = useDispatch();


    

    useEffect(()=>{
        if(myTurnCard.length > 1){
            setMycard(myTurnCard.slice(0,2))
            setMyScore((prevState)=> prevState * 0 + scoreCal(myTurnCard.slice(0,2), "MY")[0])
        }
    },[myTurnCard])


    const hit =() =>{
        setNextCard((prevState)=> prevState +1)
        setMycard((prevState)=>[...prevState, myTurnCard[nextCard + 2]])
        setcheckBlackjack(false)
    }



    useEffect(()=>{
        if(myCard){
            setMyScore((a) => a * 0 + scoreCal(myCard)[0])
            // setMyFinalScore((prevState)=> prevState* 0 + myScore)
        }
    },[myCard])


    useEffect(()=>{
        dispatch(myFinalScore(myScore))
    },[dispatch, myScore])


    return(<>
    
        <div className='playerWrapper'>
        {myScore && myCard ?
            <>
                <h2>현재 나의 점수 : {myScore} </h2>
                <div className='MycardContainer'>
                    { Array(myCard.length).fill().map((v,i) => (
                        <div className='myBox' key={i}>
                             보유 {i+1}번 카드는: {myCard[i].mark + myCard[i].card}
                        </div>
                    ))}

                </div>
            </>
            :
            <>
            </>

            }
            
        </div>
        <button className='addCard' onClick={hit}>HIT</button>

    </>)

}

export default Player;