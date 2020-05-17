import React from 'react';
import {Input, CustomInput, Form, FormGroup, Label, Container} from 'reactstrap';
import classes from './settings.module.css';
import {connect} from "react-redux"


const settings =(props) =>{
    console.log(props.rules)
    let checkVal;
    if (props.rules=="casino"){
        checkVal=true;
    }else{
        checkVal=false;
    }
    console.log(checkVal)
    return(
        <div >
            <Form>
                    <h1 className={classes.header}>Settings</h1>
                <Container className={classes.formbg}>
                    <div className={classes.formrow}> 
                    <p>Set Normal Payout Multiplier (Default is 1x):</p>
                    <Input defaultValue={props.normalPay} onClick={(event)=>props.onNormalPayoutSelect(event.target.value)} type="select" name="select" id="exampleSelect">
                        <option value={0.5}>0.5x</option>
                        <option value={1}>1x</option>
                        <option value={2}>2x</option>
                        <option value={3}>3x</option>
                        <option value={4}>4x</option>
                    
                    </Input>
                    </div>
                    <p>Set Blackjack Payout Multiplier (Default is 1.5x):</p>
                    <Input defaultValue={props.bjPay} onClick={(event)=>props.onBjPayoutSelect(event.target.value)} type="select" name="select" id="exampleSelect">
                        <option value={0.5}>1x</option>
                        <option value={1.5}>1.5x</option>
                        <option value={3}>3x</option>
                        <option value={5}>5x</option>
                        <option value={7}>7x</option>
                    </Input>
                </Container>
            </Form>
        </div>
    )
};

const mapStateToProps = state =>{
    return {
        normalPay:state.play.normalMultiplier,
        bjPay:state.play.bjMultiplier
    };
}

const mapDispatchToProps = dispatch =>{
    return {
       onNormalPayoutSelect: (eventval) => dispatch ({type: "NPAYOUT", value:eventval}),
       onBjPayoutSelect: (eventval)=>dispatch ({type:"BJPAYOUT", value:eventval})
    };
}


export default connect(mapStateToProps , mapDispatchToProps)(settings);