import React, {memo, useEffect, useMemo, useState} from 'react'
import "../css/dealer.css"
import { useDispatch} from 'react-redux'
import {cards} from '../function/initShuffle'
import {initCardDecks} from '../slice/cardSlice'
import {scoreCal} from '../function/scoreCal'
import {dealerFinalScores} from '../slice/scoreSlice'


const Dealer= memo(({isDealerOpen})=>{

    const dispatch = useDispatch();
    let firstCards = useMemo(()=> cards(),[])
    let openScore = useMemo(()=> scoreCal(firstCards.slice(0,2),"DEALER")[1],[firstCards])
    let firstDealerCards = scoreCal(firstCards.slice(0,2),"DEALER")[0]


    const [dealerScores , setdealerScores] = useState(firstDealerCards)
    const [initDealerCards, setInitDealerCards] = useState([{
        mark : "",
        card : 0,
    }])

    useEffect(()=>{
        if(dealerScores >= 17){
            dispatch(initCardDecks(firstCards.slice(2)))
            setInitDealerCards(firstCards.slice(0,2))
            dispatch(dealerFinalScores(dealerScores))
        }else{
            dispatch(initCardDecks(firstCards.slice(3)))
            setInitDealerCards(firstCards.slice(0,3))
            setdealerScores(scoreCal(firstCards.slice(0,3),"DEALER")[0])
            dispatch(dealerFinalScores(scoreCal(firstCards.slice(0,3),"DEALER")[0]))
        }
        // eslint-disable-next-line
    },[dispatch , firstCards])


    return( 
        <>
        
            { isDealerOpen ?
            <div className='dealer_wrapper'>
                <h2>게임 진행중 ..</h2>
                <h2>딜러 점수는 : {openScore} </h2>
                <div className='dealer_box-wapper'>
                    <div className='dealer-box'>
                       { initDealerCards.length > 1 && <img className= 'cardImg' src = {require("../assets/"+ initDealerCards[0].mark + initDealerCards[0].card+".png")} alt=''/>  }
                    </div>
                </div>
            </div>
                :
            <div className='dealer_wrapper'>
                <h2>게임 종료!</h2>
                <h2>딜러 점수는: {dealerScores} </h2>
                <div className='dealer_box-wapper'>
                    { Array(initDealerCards.length).fill().map((v,i) => (
                    <div className='dealer-box' key={i}>
                        <img className= 'cardImg' src = {require("../assets/"+ initDealerCards[i].mark + initDealerCards[i].card+".png")} alt='' />
                    </div>
                    ))}
                </div>
            </div>

            }
            
        </>
    )

})


export default Dealer;