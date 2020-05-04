import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './MenuItem.module.css'

const menuItem=(props)=>{
    const glyphStyle={
        fontSize:"20px",
        marginLeft:"10px"
    }
    return(
        <NavLink to={props.link} className={classes.menuitem}>{props.children}<i style={glyphStyle} class={props.icon}></i></NavLink>
        
    )
};

export default menuItem;