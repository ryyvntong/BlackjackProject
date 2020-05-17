import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

import bjIcon from '../../assets/icon.png'
import classes from './navbar.module.css'

class NaviBar extends Component{
    render(){
        return(
        <Navbar color="dark" dark expand="md">
            <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink href="/"><img src={bjIcon} className={classes.icon}></img></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/ryyvntong/BlackjackProject/tree/master/blackjackproject">GitHub Repo <i class="fab fa-github-square"></i></NavLink>
            </NavItem>
            </Nav> 
        </Navbar>
        )
    }
}

export default NaviBar;