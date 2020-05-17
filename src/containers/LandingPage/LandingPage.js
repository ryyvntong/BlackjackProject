import React, {Component,useState} from 'react';
import classes from '../LandingPage/LandingPage.module.css'
import {Container, Row, Col} from 'reactstrap'
import {NavLink as RouteLink, Route} from 'react-router-dom'
import bjIcon from '../../assets/icon.png'
import MenuItems from "../../components/menuitems/MenuItems"
import {connect} from "react-redux"
import Rules from '../../components/rules/rules'
import MenuItem from '../../components/menuitems/menuitem/MenuItem'
import Settings from "../../components/settings/settings"
import Navibar from '../../components/navbar/navbar'

export class LandingPage extends Component{
    state={
        menuOption:"home"
    }
    testFunc=()=>{
        console.log('hi')
    }
    
    render(){
        const glyphStyle={
            fontSize:"20px",
            marginLeft:"10px"
        }
        let menu;
        if(this.props.menu=="home"){
            menu=(<div>
                    <RouteLink to="/play" className={classes.menuitem}>Start<i style={glyphStyle} class="fas fa-play"></i></RouteLink>
                    <MenuItems clickedRules={this.props.onRulesSelect} clickedSettings={this.props.onSettingsSelect}></MenuItems>
                </div>)
        }else if(this.props.menu==="rules"){
            menu=(<div><Rules></Rules>
                <MenuItem clicked={this.props.onBackSelect} icon="fas fa-arrow-left">Back</MenuItem>
                </div>)
        }else{
            menu=(<div><Settings></Settings><MenuItem clicked={this.props.onBackSelect} icon="fas fa-arrow-left">Back</MenuItem></div>)
        }
        return(
            <div className={classes.parentDiv}>
                <Navibar/>
                <Container fluid={true} className={classes.mainpage}>
                    <Row>
                        <Col xs="5">
                            <p className={classes.titlefont}>Blackjack<img className={classes.icon} src={bjIcon}></img></p>
                        <div>
                        {menu}
                        </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

        )
        
}};

//994D-FA88



const mapStateToProps = state =>{
    return {
        menu:state.menu.menuOption
    };
}

const mapDispatchToProps = dispatch =>{
    return {
       onRulesSelect: () => dispatch  ({type: "RULES"}),
       onSettingsSelect: () => dispatch ({type: "SETTINGS"}),
       onBackSelect: ()=>dispatch ({type:"HOME"})
    };
}

export default connect(mapStateToProps , mapDispatchToProps)(LandingPage);