import React from 'react'
import MenuItem from './menuitem/MenuItem'

const menuItems=(props)=>{
    return(
        <div>
            <MenuItem clicked={props.clickedRules} icon="fas fa-book">Rules</MenuItem>
            <MenuItem clicked={props.clickedSettings} icon="fas fa-cog">Settings</MenuItem>      
            <p>*** When pressing the deal button for the first time, please give some time for the API to load up.</p>   
        </div>
        
    )
};

export default menuItems;