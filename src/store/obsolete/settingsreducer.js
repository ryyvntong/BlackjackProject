import {updateObject} from "../utility/utility"



//NOT USED
const initialState={
    rulesSetting:"casino", //casino or normal, dealer hits till 17
    normalPayout:1,
    bjPayout:1.5
}



// const setMenuRules=(state,action)

const reducer=(state=initialState,action)=>{
    let updatedState;
    console.log(state)
    switch(action["type"]){
        case "NPAYOUT":
            updatedState={
                normalPayout:action["value"]
            };
            return updateObject(state,updatedState);
        case "BJPAYOUT":
            updatedState={
                bjPayout:action["value"]
            }
            return updateObject(state,updatedState);
        case "RULE":
            if(action["checked"]===true){
                updatedState={
                    rulesSetting:"normal"
                }
            }else{
                updatedState={
                    rulesSetting:"casino"
                }
            }
            return updateObject(state,updatedState);
        
    }   
    return state;
};

export default reducer