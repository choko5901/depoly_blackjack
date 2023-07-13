import {winConfrimSweet, defeatConfrimSweet, drawConfrimSweet} from '../alert/resultAlert'

export function winnerJugement(myFinalScores, dealerFinalScores) {

    let comparedScores = myFinalScores - dealerFinalScores


    const judged = x => ({
        on: () => judged(x),
        otherwise: () => x,
      })
    
      const judge = x => ({  
        on: (pred, fn) => (pred(x) ? judged(fn(x)) : judge(x)),
        otherwise: fn => fn(x),
      })
    

      let winner = judge(comparedScores)
    .on(comparedScores => comparedScores > 0 && myFinalScores <= 21 , () => winConfrimSweet("플레이어 승리", "게임을 다시 시작 하시겠습니까?"))
    .on(comparedScores => comparedScores === 0 ,() => drawConfrimSweet("무승부", "게임을 다시 시작 하시겠습니까?"))
    .on( () => dealerFinalScores > 21,() => winConfrimSweet("딜러버스터 ! 플레이어 승리", "게임을 다시 시작 하시겠습니까?"))
    .otherwise( () => defeatConfrimSweet("플레이어 패배", "게임을 다시 시작 하시겠습니까?"))
    

    return winner
}