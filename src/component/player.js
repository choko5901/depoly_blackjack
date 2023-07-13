import React, {useEffect, useState} from 'react'
import "../css/player.css"
import { useDispatch, useSelector } from 'react-redux'
import {scoreCal} from '../function/scoreCal'
import {myFinalScores} from '../slice/scoreSlice'

import {winConfrimSweet} from '../alert/resultAlert'

const Player = ()=>{

    const myTurnCards = useSelector((state)=>state.initCardDeck.value)
    const [myCards , setmyCards] =useState();
    const [myScores, setmyScores] = useState(0);
    const [nextCards, setnextCards] = useState(0);
    const [isBlackjack, setisBlackjack] = useState(true)

    
    const dispatch = useDispatch();

    useEffect(()=>{
        if(myTurnCards.length > 1){
            setmyCards(myTurnCards.slice(0,2))
            setmyScores((prevState)=> prevState * 0 + scoreCal(myTurnCards.slice(0,2), "MY")[0])
            
        }
    },[myTurnCards])
    
    useEffect(()=>{
        if(myCards){
            setmyScores((a) => a * 0 + scoreCal(myCards , "MY")[0])
        }
    },[myCards])


    useEffect(()=>{
        dispatch(myFinalScores(myScores))
        if(myScores === 21 && isBlackjack){
            winConfrimSweet("balckJack 승리","게임을 다시 시작 하시겠습니까?")
       }
    },[dispatch, myScores, isBlackjack])
                              

    const hit =() =>{
        setnextCards((prevState)=> prevState +1)
        setmyCards((prevState)=>[...prevState, myTurnCards[nextCards + 2]])
        setisBlackjack(false)
    }

    return(<>
    
        <div className='playerWrapper'>
        {myScores && myCards ?
            <>
                <h2>현재 나의 점수 : {myScores} </h2>
                <div className='MycardContainer'>
                    { Array(myCards.length).fill().map((v,i) => (
                        <div className='myBox' key={i}>
                            <img className= 'cardImg' src = {require("../assets/"+ myCards[i].mark + myCards[i].card+".png")} alt=''/>
                        </div>
                    ))}
                </div>
            </>
            :
            <>
                <h2>현재 나의 점수 : {myScores} </h2>
                    <div className='MycardContainer'>
                        <div className='myBox'></div>
                        <div className='myBox'></div>
                    </div>

            </>

            }
            
        </div>
        <button className='addCard' onClick={hit}>HIT</button>

    </>)

}

export default Player;