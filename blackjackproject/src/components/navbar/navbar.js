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

class NaviBar extends Component{
    render(){
        return(
        <Navbar color="dark" dark expand="md">
            <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Options
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                Option 1
                </DropdownItem>
                <DropdownItem>
                Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                Reset
                </DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
            </Nav> 
        </Navbar>
        )
    }
}

export default NaviBar;