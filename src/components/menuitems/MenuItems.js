import React from 'react'
import MenuItem from './menuitem/MenuItem'

const menuItems=(props)=>{
    return(
        <div>
            <MenuItem clicked={props.clickedRules} icon="fas fa-book">Rules</MenuItem>
            <MenuItem clicked={props.clickedSettings} icon="fas fa-cog">Settings</MenuItem>         
        </div>
        
    )
};

export default menuItems;