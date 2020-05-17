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

    doubleDownHandler=()=>{
        this.props.doubleBet()
        let data={
            handValue:this.props.playerTotal,
            handArray:this.props.playerHandCards
        }
        //double bets here
        axios.post("https://deckofcardsapi.herokuapp.com/hit",data).then
        (response=>{this.props.hitHandler(response.data["cards"],response.data)
            data={
                handValue:this.props.dealerTotal,
                handArray:this.props.dealerHandCards
            }
            axios.post("https://deckofcardsapi.herokuapp.com/stand",data).then(response=>{this.props.standHandler(response.data["cards"],response.data)})
            //hit the stand fxn

    })
    }

    dealCardsHandler=()=>{
        this.props.startGame()
        axios.get("https://deckofcardsapi.herokuapp.com/deal").then
        (response=>{this.props.dealHandler(response.data["cards"])})}

    hitCardHandler=()=>{
        let data={
            handValue:this.props.playerTotal,
            handArray:this.props.playerHandCards
        }
        axios.post("https://deckofcardsapi.herokuapp.com/hit",data).then
        (response=>{this.props.hitHandler(response.data["cards"],response.data)
    console.log(response.data)})
    }

    standHandler=()=>{
        let data={
            handValue:this.props.dealerTotal,
            handArray:this.props.dealerHandCards
        }
            axios.post("https://deckofcardsapi.herokuapp.com/stand",data).then(response=>{this.props.standHandler(response.data["cards"],response.data)})}

    // doubleDownHandler=()=>{
    //     //run hit req then stand req instantly
    // }

    //         // this.props.standHandler(response.data["cards"]
    //     // while (drawAgain==true){
    //     //     axios.post("http://127.0.0.1:5000/stand",data).then(response=>{this.props.standHandler(response.data["cards"])})}}

    // // checkWin=()=>{

    // // }

    render(){
        const glyphStyle={
            fontSize:"20px",
            marginLeft:"10px"
        }
    
        let dealerCards=this.props.dealerCardImgs.map(image => {
            return <img className={classes.cards} src={image}></img>
        })
        let playerCards=this.props.playerCardImgs.map(image => {
            return <img className={classes.cards} src={image}></img>
        })

        let doubleDownAvailable=((this.props.firstTurnStatus && this.props.playing) && (this.props.playAmt-this.props.betAmt>0))
        console.log(doubleDownAvailable)
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
                                <Button disabled={this.props.playing} onClick={this.dealCardsHandler} className={classes.button} color="success">Deal</Button>
                                <Button disabled={!this.props.playing} className={classes.button} onClick={this.hitCardHandler} color="success">Hit</Button>
                                <Button disabled={!this.props.playing} className={classes.button} onClick={this.standHandler} color="success">Stand</Button>
                                <Button disabled={!doubleDownAvailable} className={classes.button} onClick={this.doubleDownHandler} color="success">Double Down</Button>
                                <Button disabled={this.props.playing} className={classes.button} onClick={this.props.resetBet} color="success">Reset Bet</Button>
                            </Col>
                        </Row>
                        <Container className={classes.actionholder}>
                            <Row>
                                <Col xs="9" className={classes.chipbar}>
                                        <input disabled={this.props.playing} type="image" className={classes.chips} onClick={this.props.betOne} src={OneChip}></input>
                                        <input disabled={this.props.playing} type="image" className={classes.chips} onClick={this.props.betFive} src={FiveChip}></input>
                                        <input disabled={this.props.playing} type="image" className={classes.chips} onClick={this.props.betTen} src={TenChip}></input>
                                        <input disabled={this.props.playing} type="image" className={classes.chips} onClick={this.props.betTwoFive} src={TwoFiveChip}></input>
                                        <input disabled={this.props.playing} type="image" className={classes.chips} onClick={this.props.betHun} src={HunChip}></input>
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
        playerCardImgs:state.play.playerImgArray,
        dealerTotal:state.play.dealSum,
        playerTotal:state.play.playerSum,
        playerHandCards:state.play.playerHandCards,
        dealerHandCards:state.play.dealerHandCards,
        firstTurnStatus:state.play.firstTurn
    };
}

const mapDispatchToProps = dispatch =>{
    return {
       betOne: () => dispatch  ({type: "ONE"}),
       betFive: () => dispatch ({type: "FIVE"}),
       betTen: ()=>dispatch ({type:"TEN"}),
       betTwoFive: () => dispatch ({type: "TWOFIVE"}),
       betHun: ()=>dispatch ({type:"HUN"}),
       dealHandler:(cardArray)=>dispatch({type:"DEAL",cards:cardArray}),
       hitHandler:(card,info)=>dispatch({type:"HIT",returnedCard:card,playerInfo:info}),
       resetBet:()=>dispatch({type:"RESET"}),
       startGame:()=>dispatch({type:"START"}),
       standHandler:(card,info)=>dispatch({type:"STAND",cardData:card,dealerInfo:info}),
       doubleBet:()=>dispatch({type:"DOUBLE"})
    };
}




export default connect(mapStateToProps,mapDispatchToProps)(PlayPage);