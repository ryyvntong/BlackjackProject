import React from 'react'
import classes from './MenuItem.module.css'

const menuItem=(props)=>{
    const glyphStyle={
        fontSize:"20px",
        marginLeft:"10px"
    }
    return(
        <p onClick={props.clicked} className={classes.menuitem}>{props.children}<i style={glyphStyle} class={props.icon}></i></p>
        
    )
};

export default menuItem;