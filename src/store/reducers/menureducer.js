import {updateObject} from "../utility/utility"

const initialState={
    menuOption:"home"
}

// const setMenuRules=(state,action)

const reducer=(state=initialState,action)=>{
    let updatedState;
    switch(action["type"]){
        case "HOME":
            updatedState={
                menuOption:"home"
            }
            return updateObject(state,updatedState);
        case "SETTINGS":
            updatedState={
                menuOption:"settings"
            }
            return updateObject(state,updatedState);
        case "RULES":
            console.log("rules")
            updatedState={
                menuOption:"rules"
            }
            return updateObject(state,updatedState);
        
    }   
    return state;
};

export default reducer