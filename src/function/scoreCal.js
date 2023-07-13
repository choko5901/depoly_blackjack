
export function scoreCal(target, who) {
    let totalScore = 0 ;
    let NumberA = 0;
    let dealerOpenCard = 0 ;


    const carlculated = x => ({
        on: () => carlculated(x),
        otherwise: () => x,
      })
      const carlculate = x => ({  
        on: (pred, fn) => (pred(x) ? carlculated(fn(x)) : carlculate(x)),
        otherwise: fn => fn(x),
      })


    dealerOpenCard = carlculate(target[0].card)
    .on( dealerOpenCard => typeof(dealerOpenCard) === 'string' && dealerOpenCard !=='A' , () =>10)
    .on( dealerOpenCard => dealerOpenCard ==='A' , () => 11)
    .otherwise( dealerOpenCard => dealerOpenCard)
    
    target.map(targetCard => {
        return(carlculate(targetCard.card)
        .on( cardNumber => typeof(cardNumber) === 'string' && cardNumber !=='A' , () => totalScore = totalScore + 10)
        .on( cardNumber => cardNumber ==='A' , () => NumberA = NumberA + 1)
        .otherwise( cardNumber => totalScore = totalScore + cardNumber))
    })

    carlculate(NumberA)
    .on(NumberA => NumberA ===1 && who === "MY" && totalScore <= 10, () => totalScore = totalScore + 11)
    .on(NumberA => NumberA ===2 && who === "MY" && totalScore <= 9, () => totalScore = totalScore + 12)
    .on(NumberA => NumberA ===3 && who === "MY" && totalScore <= 8, () => totalScore = totalScore + 13)
    .on(NumberA => NumberA ===4 && who === "MY" && totalScore <= 7, () => totalScore = totalScore + 14)
    .on(NumberA => who === "MY" && totalScore > 10, () => totalScore = totalScore + NumberA)
    .on(NumberA => who === "DEALER", ()=> totalScore = totalScore + NumberA * 11)
    .otherwise(NumberA => totalScore)

    
    return  [totalScore, dealerOpenCard]
    
}