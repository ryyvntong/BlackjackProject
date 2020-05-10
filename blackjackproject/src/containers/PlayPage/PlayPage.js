import {connect} from "react-redux"
import React, {Component,useState} from 'react';
import Navibar from '../../components/navbar/navbar'
import classes from './PlayPage.module.css';
import {Container, Col, Row, Button} from 'reactstrap';
import OneChip from '../../assets/1$chip.png'
import FiveChip from '../../assets/$5chip.png'
import TenChip from '../../assets/$10chip.png'
import TwoFiveChip from '../../assets/$25chip.png'
import HunChip from '../../assets/$100chip.png'
import {Connect} from 'react-redux'
import {NavLink as RouteLink} from 'react-router-dom'
import axios from 'axios'
class PlayPage extends Component{
    render(){
        const glyphStyle={
            fontSize:"20px",
            marginLeft:"10px"
        }
        let dealCardsHandler=()=>{
            axios.get("http://127.0.0.1:5000/deal").then
            (response=>{this.props.dealHandler(response.data["cards"])
        console.log(response.data["cards"])})
        }
        let dealerCards=this.props.dealerCardImgs.map(image => {
            return <img className={classes.cards} src={image}></img>
        })
        let playerCards=this.props.playerCardImgs.map(image => {
            return <img className={classes.cards} src={image}></img>
        })


        return(
            <div>
                <Navibar/>
                <Container fluid={true} className={classes.main}>
                    <div className={classes.center}>
                        <p className={classes.header}>Let's Play Blackjack!</p>
                        <p className={classes.playerheaders}>Dealer:</p>
                        <div className={classes.hands}>{dealerCards}</div>
                        <p className={classes.playerheaders}>You:</p>
                        <div className={classes.hands}>{playerCards}</div>
                        <Row>
                            <Col className={classes.buttonbar}>
                                <Button disabled={this.props.playing} onClick={dealCardsHandler} className={classes.button} color="success">Deal</Button>
                                <Button className={classes.button}color="success">Hit</Button>
                                <Button className={classes.button} color="success">Stand</Button>
                                <Button className={classes.button} color="success">Double Down</Button>
                                <Button className={classes.button} color="success">Reset Bet</Button>
                            </Col>
                        </Row>
                        <Container className={classes.actionholder}>
                            <Row>
                                <Col xs="9" className={classes.chipbar}>
                                        <img className={classes.chips} onClick={this.props.betOne} src={OneChip}></img>
                                        <img className={classes.chips} onClick={this.props.betFive} src={FiveChip}></img>
                                        <img className={classes.chips} onClick={this.props.betTen} src={TenChip}></img>
                                        <img className={classes.chips} onClick={this.props.betTwoFive} src={TwoFiveChip}></img>
                                        <img className={classes.chips} onClick={this.props.betHun} src={HunChip}></img>
                                </Col>
                                <Col xs="3" className={classes.betdisplay}>
                                    <p>Bet: {this.props.betAmt}</p>
                                    <p>Amount: {this.props.playAmt}</p>
                                </Col>
                            </Row>
                        </Container>
                        <Row>
                            <Col className={classes.backbar}>
                                <RouteLink to="/" className={classes.menuitem}>Back to Main Menu<i style={glyphStyle} class="fas fa-arrow-left"></i></RouteLink>
                             </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        playAmt:state.play.Amount,
        betAmt:state.play.bet,
        playing:state.play.playing,
        standing:state.play.standing,
        dealerCardImgs:state.play.dealerImgArray,
        playerCardImgs:state.play.playerImgArray
    };
}

const mapDispatchToProps = dispatch =>{
    return {
       betOne: () => dispatch  ({type: "ONE"}),
       betFive: () => dispatch ({type: "FIVE"}),
       betTen: ()=>dispatch ({type:"TEN"}),
       betTwoFive: () => dispatch ({type: "TWOFIVE"}),
       betHun: ()=>dispatch ({type:"HUN"}),
       dealHandler:(cardArray)=>dispatch({type:"DEAL",cards:cardArray})
    };
}




export default connect(mapStateToProps,mapDispatchToProps)(PlayPage);