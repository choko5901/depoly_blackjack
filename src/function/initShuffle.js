

export function cards() {

    const mark = ["하트","클로버","스페이드","다이아몬드"]
    const cardNum = ['A',2,3,4,5,6,7,8,9,10,"J","Q","K"]
    let cardDeck = []
    for(let i=0; i <4 ; i++){
        for (let j=0 ; j <13 ; j++){
           cardDeck.push({
            mark : mark[i] ,
            card :cardNum[j]})
        }
    }
    const shuffle = [];
    while (cardDeck.length > 0) {
      shuffle.push(cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1)[0]);
    }

    return shuffle
}