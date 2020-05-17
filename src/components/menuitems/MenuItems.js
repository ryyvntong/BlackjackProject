import React from 'react'
import MenuItem from './menuitem/MenuItem'
import classes from './MenuItems.module.css'

const menuItems=(props)=>{
    return(
        <div>
            <MenuItem clicked={props.clickedRules} icon="fas fa-book">Rules</MenuItem>
            <MenuItem clicked={props.clickedSettings} icon="fas fa-cog">Settings</MenuItem>      
            <p className={classes.disclaimer}>*** When pressing the deal button for the first time, please give some time for the API to load up. It takes around 20 seconds to initialize.</p>     
        </div>
        
    )
};

export default menuItems;