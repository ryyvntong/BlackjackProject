import React from 'react'
import classes from './rules.module.css'

const rules =() =>{
    return(
        <div>
            <h1 className={classes.header}>Basic Blackjack Rules</h1>
            <ul className={classes.entries}>
                <li>The goal of blackjack is to beat the dealer's hand without going over 21. Normal payout for winning is double your bet.</li>
                <li>Face cards (Jack, Queen, and King) are worth 10. Aces are worth 1 or 11, whichever makes a better hand.</li>
                <li>Each player starts with two cards, one of the dealer's cards is hidden until the end.</li>
                <li>To 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.</li>
                <li>If you go over 21 you bust (lose), and the dealer wins regardless of the dealer's hand.</li>
                <li>If you are dealt 21 from the start (Ace & 10), you got a blackjack, which is an automatic win, and results in a <strong>3:2 payout.</strong></li>
                <li>Dealer will hit until his/her cards total 17 or higher. Can be changed in settings</li>
                <li>Split can be done when you have two of the same card - the pair is split into two hands.</li>
                <li>Splitting also doubles the bet, because each new hand is worth the original bet.</li>
                <li>You can only double/split on the first move, or first move of a hand created by a split. You cannot play on two aces after they are split.</li>
                <li>You can double on a hand resulting from a split, tripling or quadrupling you bet.
</li>




            </ul>
        </div>
    )
}

export default rules;
