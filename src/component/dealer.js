import React, {memo, useEffect, useMemo, useState} from 'react'
import "../css/dealer.css"
import { useDispatch} from 'react-redux'
import {cards} from '../function/initShuffle'
import {initCardDeck} from '../slice/cardSlice'
import {scoreCal} from '../function/scoreCal'
import {dealerFinalScore} from '../slice/scoreSlice'


const Dealer= memo(({dealerOpen})=>{

    const firstCard = useMemo(()=> cards(),[])
    const dispatch = useDispatch();

    const [dealerScore , setdealerScore] = useState(scoreCal(firstCard.slice(0,2),"DEALER")[0])
    const openScore = useMemo(()=> scoreCal(firstCard.slice(0,2),"DEALER")[1],[firstCard])



    const [initDealerCard, setInitDealerCard] = useState([{
        mark : "",
        card : 0,
    }])

    useEffect(()=>{
        if(dealerScore >= 17){
            dispatch(initCardDeck(firstCard.slice(2)))
            setInitDealerCard(firstCard.slice(0,2))
            dispatch(dealerFinalScore(dealerScore))
        }else{
            dispatch(initCardDeck(firstCard.slice(3)))
            setInitDealerCard(firstCard.slice(0,3))
            setdealerScore(scoreCal(firstCard.slice(0,3),"DEALER")[0])
            dispatch(dealerFinalScore(scoreCal(firstCard.slice(0,3),"DEALER")[0]))
        }
        // eslint-disable-next-line
    },[dispatch , firstCard])


    return( 
        <>
        
            { dealerOpen ?
            <>
                <h2>게임 진행중 ..</h2>
                <h2>딜러 점수 : {openScore} </h2>
                <div className='dealerBoxWapper'>
                    <div className='dealerBox'>
                        오픈된 카드는: {initDealerCard[0].mark + initDealerCard[0].card}
                    </div>
                </div>
            </>
                :
            <>
                <h2>딜러 점수 : {dealerScore} </h2>
                <div className='dealerBoxWapper'>
                    { Array(initDealerCard.length).fill().map((v,i) => (
                    <div className='dealerBox' key={i}>
                        딜러 보유 {i+1}번 카드는: {initDealerCard[i].mark + initDealerCard[i].card}
                    </div>
                    ))}
                </div>
            </>

            }
            
        </>
    )

})


export default Dealer;