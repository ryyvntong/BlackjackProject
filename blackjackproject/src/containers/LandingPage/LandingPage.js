import React, {Component,useState} from 'react';
import classes from '../LandingPage/LandingPage.module.css'
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
import {Container, Row, Col} from 'reactstrap'
import {NavLink as RouteLink} from 'react-router-dom'
import bjIcon from '../../assets/icon.png'


export class LandingPage extends Component{
    render(){
        return(
            <div>
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
                <Container fluid={true} class="h-100">
                    <Row className={classes.mainpage}>
                        <Col xs="4">
                            <p className={classes.titlefont}>Blackjack<img className={classes.icon} src={bjIcon}></img></p>
                        <div>
                        <RouteLink to="/test" className={classes.menuitem}>Start</RouteLink>
                        <RouteLink to="/test" className={classes.menuitem}>Rules</RouteLink>
                        <RouteLink to="/test" className={classes.menuitem}>Settings</RouteLink>
                        </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

        )
        
}};

export default LandingPage;