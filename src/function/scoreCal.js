
export function scoreCal(target, who) {
    let totalScore = 0 ;
    let NumberA = 0;
    let dealerOpenCard = 0 ;
    
    if(who === "DEALER"){
        for(let i = 0 ; i < target.length; i ++ ){
            switch(target[i].card){
                case 'J':
                    if(i === 0){
                        dealerOpenCard = 10;
                        totalScore = totalScore + 10
                    }else{
                        totalScore = totalScore + 10
                    }
                    break
                case 'Q':
                    if(i === 0){
                        dealerOpenCard = 10
                        totalScore = totalScore + 10
                    }else{
                        totalScore = totalScore + 10
                    }
                    break
                case 'K':
                    if(i === 0){
                        dealerOpenCard = 10
                        totalScore = totalScore + 10
                    }else{
                        totalScore = totalScore + 10
                        }
                    break
                case 'A':
                    if(i === 0){
                        dealerOpenCard = 11
                        totalScore = totalScore + 11
                    }else{
                        totalScore = totalScore + 11
                    } 
                    break
                default:
                    if(i === 0){
                        dealerOpenCard = target[i].card
                        totalScore = totalScore + target[i].card
                    }else{
                        totalScore = totalScore + target[i].card
                    } 
                    break
    
            }
    
        }
    }else{
        for(let i = 0 ; i < target.length; i ++ ){
      
            switch(target[i].card){
                case 'J':
                    totalScore = totalScore + 10
                    break
                case 'Q':
                    totalScore = totalScore + 10
                    break
                case 'K':
                    totalScore = totalScore + 10
                    break
                case 'A':
                    NumberA = NumberA + 1  
                    break
                default:
                    totalScore = totalScore + target[i].card
                    break
    
            }
        }

        switch(NumberA){
            case 0:
                break
            case 1:
                if(totalScore <= 10){
                    totalScore = totalScore + 11
                }else{
                    totalScore = totalScore + 1
                }
                break
            case 2:
                if(totalScore <= 9){
                    totalScore = totalScore + 12
                }else{
                    totalScore = totalScore + 2
                }
                break
            case 3:
                if(totalScore <= 8){
                    totalScore = totalScore + 13
                }else{
                    totalScore = totalScore + 3
                }
                break
            case 4:
                if(totalScore <= 7){
                    totalScore = totalScore + 14
                }else{
                    totalScore = totalScore + 4
                } 
                break
            default:
                break

        }

    
    }
    

    return  [totalScore, dealerOpenCard]
    
}