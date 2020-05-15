import {updateObject} from "../utility/utility"
import fdCard from '../../assets/fdcard.JPG'

const initialState={
    normalMultiplier:1,
    bjMultiplier:1.5,
    Amount:500,
    bet:0,
    playing:false,
    firstTurn:true,
    dealerImgArray:[],
    playerImgArray:[],
    dealerHandCards:[],
    playerHandCards:[],
    dealSum:0,
    playerSum:0,
    firstCard:""
}
const handReducer=(acc,currentval)=> acc+currentval;


// const setMenuRules=(state,action)
//make function here to calculate sum of hands, then use logic
const reducer=(state=initialState,action)=>{
    let updatedState;
    let prevAmt=state.Amount;
    let prevBet=state.bet;
    let holdState;
    let holdArrayImg;
    let holdArrayDealerValues
    let holdArrayPlayerValues;
    let firstCardHolder;
    let winnings;
    //initialize variables
    switch(action["type"]){
        case "START":
            updatedState={
                playing:true
            }
            return updateObject(state,updatedState)

        case "STAND":
            winnings=prevBet*state.normalMultiplier+prevBet
            holdArrayImg=[...state.dealerImgArray]
            holdArrayDealerValues=action["dealerInfo"]["dealerHand"]
            console.log(action["cardData"])
            for(let card of action["cardData"]){
                holdArrayImg.push(card["image"])
            }
            holdArrayImg[0]=state.firstCard
            updatedState={
                firstTurn:false,
                dealerImgArray:holdArrayImg,
                dealerHandCards:holdArrayDealerValues,
                dealSum:action["dealerInfo"]["dealerHandValue"]
            }
            console.log(updatedState.dealSum)
            //determine winner
            holdState={...updatedState,
                playing:false,
                dealSum:0,
                playerSum:0,
                dealerHandCards:[],
                playerHandCards:[],
                bet:0
            }
            //tie
            if(state.playerSum==updatedState.dealSum){
                updatedState={...holdState,
                    Amount:prevAmt+prevBet
                }}
                else if(state.playerSum>updatedState.dealSum || updatedState.dealSum>21){
                    updatedState={...holdState,
                        Amount:prevAmt+winnings
                    }//playerWin
                }else{
                    updatedState={
                        ...holdState,
                        Amount:prevAmt
                    }
                }
            
            return updateObject(state,updatedState)



        case "HIT":
            holdArrayImg=[...state.playerImgArray]
            holdArrayImg.push(action["returnedCard"][0]["image"])
            holdArrayPlayerValues=action["playerInfo"]["playerHand"]         
            updatedState={
                firstTurn:false,
                playerImgArray:holdArrayImg,
                playerHandCards:holdArrayPlayerValues,
                playerSum:action["playerInfo"]["playerHandValue"]
            }
            if(updatedState.playerSum>21){
                holdState={...updatedState,
                    playerSum:0,
                    bet:0,
                    dealSum:0,
                    playing:false,
                    dealerHandCards:[],
                    playerHandCards:[]
                }
                updatedState={...holdState}
            }

            return updateObject(state,updatedState)

        case "DEAL":
            //save the img of the first card.
            firstCardHolder=action["cards"][0]["image"]
            holdArrayImg=[]
            holdArrayImg.push(fdCard)
            holdArrayImg.push(action["cards"][1]["image"])
            holdArrayPlayerValues=[...state.playerHandCards]
            holdArrayDealerValues=[...state.dealerHandCards]
            holdArrayDealerValues.push(action["cards"][0]["value"])
            holdArrayDealerValues.push(action["cards"][1]["value"])
            holdArrayPlayerValues.push(action["cards"][2]["value"])
            holdArrayPlayerValues.push(action["cards"][3]["value"])
            updatedState={
                firstTurn:true,
                dealerImgArray:holdArrayImg,
                playerImgArray:[action["cards"][2]["image"],action["cards"][3]["image"]],
                dealerHandCards:holdArrayDealerValues,
                playerHandCards:holdArrayPlayerValues,
                dealSum:holdArrayDealerValues.reduce(handReducer),
                playerSum:holdArrayPlayerValues.reduce(handReducer),
                firstCard:firstCardHolder
            }
            //check if initial hand is blackjack and dealer 
            if(updatedState["playerSum"]==21 || updatedState["dealSum"]==21){
                holdArrayImg[0]=firstCardHolder
                winnings=prevBet*state.bjMultiplier+prevBet
                holdState={
                    playing:false,
                    dealerImgArray:holdArrayImg,
                    playerImgArray:[action["cards"][2]["image"],action["cards"][3]["image"]],
                    dealSum:0,
                    playerSum:0,
                    bet:0,
                    dealerHandCards:[],
                    playerHandCards:[]
                }
                if(updatedState["playerSum"]==21 && updatedState["dealSum"]<21){
                    updatedState={
                        ...holdState,
                        Amount:prevAmt+winnings
                    }
                    console.log("win")
                ///dealerbj
                }else if(updatedState["dealSum"]==21 && updatedState["playerSum"]<21){
                    updatedState={
                        ...holdState,
                        Amount:prevAmt
                    }
                    console.log("lose")
                }else{
                    updatedState={
                        ...holdState,
                        Amount:prevAmt+prevBet
                    }
                    console.log("tie")
                }

            //else, if dealer gets insta bj

            }
            return updateObject(state,updatedState)


        case"DOUBLE":
            updatedState={
                Amount:prevAmt-prevBet,
                bet:prevBet*2
            }
            return updateObject(state,updatedState)

        case"RESET":
            updatedState={
                Amount:prevAmt+prevBet,
                bet:0
            }
            return updateObject(state,updatedState)

        case "ONE":
            if(prevAmt-1>=0){
            updatedState={
                Amount:prevAmt-1,
                bet:prevBet+1
            }
             return updateObject(state,updatedState);
        }else{
            return state;
        }

        case "FIVE":
            if(prevAmt-5>=0){
                updatedState={
                    Amount:prevAmt-5,
                    bet:prevBet+5
                }
                 return updateObject(state,updatedState);
            }else{
                return state;
            }

        case "TEN":
            if(prevAmt-10>=0){
                updatedState={
                    Amount:prevAmt-10,
                    bet:prevBet+10
                }
                 return updateObject(state,updatedState);
            }else{
                return state;
            }

        case"TWOFIVE":
            if(prevAmt-25>=0){
                updatedState={
                    Amount:prevAmt-25,
                    bet:prevBet+25
                }
                return updateObject(state,updatedState);
        }else{
            return state;
        }
        
        case"HUN":
        if(prevAmt-100>=0){
            updatedState={
                Amount:prevAmt-100,
                bet:prevBet+100
            }
             return updateObject(state,updatedState);
        }else{
            return state;
        }
            
        
    }
    return state;
};

export default reducer

// if(state.dealerHandCards.length==0 && state.playerHandCards.length==0){
//     dealSum=0
//     playerSum=0
// }else{
//     dealSum=state.dealerHandCards.reduce(handReducer);
//     playerSum=state.playerHandCards.reduce(handReducer)
// }