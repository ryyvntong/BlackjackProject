import React from 'react'
import MenuItem from './menuitem/MenuItem'

const menuItems=(props)=>{
    return(
        <div>
            <MenuItem link="/play" icon="fas fa-play">Start</MenuItem>
            <MenuItem link="/rules" icon="fas fa-book">Rules</MenuItem>
            <MenuItem link="/settings" icon="fas fa-cog">Settings</MenuItem>
            
        </div>
        
    )
};

export default menuItems;