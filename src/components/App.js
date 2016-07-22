import React, { Component, PropTypes } from 'react';

import LeftSideButtons from './LeftSideButtons';
import RightSideButtons from './RightSideButtons';
import Screen from './Screen';
import Keypad from './Keypad';
import CardSlot from './CardSlot';

import AbortButton from './AbortButton';
import OKButton from './OKButton';
import ResetButton from './ResetButton';
import BackButton from './BackButton';

import Money from './Money';

import { ATMstates, cardStates } from '../constants';


class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {

    let state = this.props.transaction.state;

    // Filter user's input before showing it on the screen.
    // When entering the PIN, we substitute each charachter with '*'.
    let userInput = (state == ATMstates.pin_entry)
      ? '*'.repeat(this.props.ui.input.length)
      : this.props.ui.input;

    // Return different actions depending on the current ATM state.
    const useCard = () => {
      if (this.props.transaction.isAborting) {
        return this.props.actions.abortTakeCard()
      } else if (state == ATMstates.withdrawing &&
        this.props.transaction.cardState == cardStates.out) {
        return this.props.actions.withdrawTakeCard()
      } else if (state == ATMstates.initial) {
        return this.props.actions.insertCard()
      }
      else {
        return null
      }
    };

    // Pressing the "OK" button either confirms the PIN or the amount withdrawn
    // depending on the current state of the ATM
    const pressConfirm = () => {
      if (state == ATMstates.pin_entry) {
        return this.props.actions.confirmPIN()
      } else if (state == ATMstates.select_amount) {
        return this.props.actions.confirmAmount(this.props.ui.input)
      } else {
        return null
      }
    };

    // pressing abort must not result in any action if we are already aborting or if
    // we haven't started using the ATM yet.
    const abort = () => {
      if (this.props.transaction.isAborting) {
        return null;
      } else if (state == ATMstates.initial) {
        return null;
      } else {
        return this.props.actions.abort()
      }
    };

    let cash = (this.props.transaction.moneyOut)
      ? this.props.transaction.amountWithdrawn.concat(' €')
      : '';

    return (
      <div className="container">
        <div className="screen-container">
          <LeftSideButtons selectAmount={state == ATMstates.select_amount
                             ? this.props.actions.selectAmount
                             : null}/>
          <Screen text={this.props.ui.text}
                  input={userInput}
                  showChoices={state == ATMstates.select_amount} />
          <RightSideButtons selectAmount={state == ATMstates.select_amount
                                            ? this.props.actions.selectAmount
                                            : null}/>
        </div>
        <div className="keys-container">
          <Keypad state={state}
                  onKeypress={this.props.actions.onKeypress} />
          <div className="action-keys">
            <OKButton pressConfirm={pressConfirm} />
            <BackButton goBack={this.props.actions.goBack}/>
            <ResetButton resetInput={this.props.actions.resetInput}/>
            <AbortButton abort={abort}/>
          </div>
        </div>
        <div className="slots-container">
          <Money    takeMoney={this.props.actions.takeMoney} cash={cash}/>
          <CardSlot useCard={useCard}
                    slotText={this.props.ui.slotText} />
        </div>
      </div>
    )
  }

}


export default App;
