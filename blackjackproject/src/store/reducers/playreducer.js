import {updateObject} from "../utility/utility"
import fdCard from '../../assets/fdcard.JPG'

const initialState={
    Amount:500,
    bet:0,
    playing:false,
    standing:false,
    dealerImgArray:[(fdCard)],
    playerImgArray:[],
    dealerHandValue:0,
    playerHandValue:0
}

// const setMenuRules=(state,action)

const reducer=(state=initialState,action)=>{
    let updatedState;
    let prevAmt=state.Amount;
    let prevBet=state.bet;
    let holdArray;
    switch(action["type"]){
        case "DEAL":
            console.log(action["cards"][1]["image"])
            holdArray=[...state.dealerImgArray]
            holdArray.push(action["cards"][1]["image"])
            updatedState={
                playing:true,
                dealerImgArray:holdArray,
                playerImgArray:[action["cards"][2]["image"],action["cards"][3]["image"]]
            }
            console.log(updatedState)
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