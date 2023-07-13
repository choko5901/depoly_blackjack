

export function cards() {

    const mark = ["heart","clover","spade","diamond"]
    const cardNum = ['A',2,3,4,5,6,7,8,9,10,"J","Q","K"]
    let cardDecks = []
    for(let i=0; i <4 ; i++){
        for (let j=0 ; j <13 ; j++){
            cardDecks = [...cardDecks,
                {
                mark : mark[i] ,
                card :cardNum[j]
                }
            ]
        }
    }
    let shuffles = []
    while (cardDecks.length > 0) {
        shuffles = [...shuffles, cardDecks.splice(Math.floor(Math.random() * cardDecks.length), 1)[0]]
    }

    return shuffles
}