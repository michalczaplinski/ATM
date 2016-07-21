import React, { Component, PropTypes } from 'react';

import LeftSideButtons from './LeftSideButtons';
import RightSideButtons from './RightSideButtons';
import Screen from './Screen';
import Keypad from './Keypad';
import CardSlot from './CardSlot';

import CancelButton from './CancelButton';
import OKButton from './OKButton';
import ResetButton from './ResetButton';
import BackButton from './BackButton';

import Wallet from './Wallet';
import Money from './Money';

import { states } from '../constants';


class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {

    let state = this.props.transactionState.state;

    let userInput = (state == states.pin_entry)
      ? '*'.repeat(this.props.ui.input.length)
      : this.props.ui.input;

    const useCard = () => {
      if (this.props.transactionState.isAborting || this.props.transactionState.isWithdrawing) {
        return this.props.actions.takeCard()
      } else if (state == states.initial) {
        return this.props.actions.insertCard()
      }
      else {
        return null
      }
    };

    const pressConfirm = () => {
      if (state == states.pin_entry) {
        return this.props.actions.confirmPIN()
      } else if (state == states.select_amount) {
        return this.props.actions.confirmAmount(this.props.ui.input)
      } else {
        return null
      }
    };

    const cancel = () => {
      if (this.props.transactionState.isAborting) {
        return null;
      } else if (state == states.initial) {
        return null;
      } else {
        return this.props.actions.cancel()
      }
    };

    let cash = (state == states.taking_money)
      ? this.props.ui.amountWithdrawn.concat(' €')
      : '';

    return (
      <div className="container">
        <div className="screen-container">
          <LeftSideButtons selectAmount={state == states.select_amount
                             ? this.props.actions.selectAmount
                             : null}/>
          <Screen text={this.props.ui.text}
                  input={userInput}
                  showChoices={state == states.select_amount} />
          <RightSideButtons selectAmount={state == states.select_amount
                                            ? this.props.actions.selectAmount
                                            : null}/>
        </div>
        <div className="keys-container">
          <Keypad state={state}
                  onKeypress={this.props.actions.onKeypress} />
          <CardSlot useCard={useCard}
                    slotText={this.props.ui.slotText} />
          <CancelButton cancel={cancel}/>
          <OKButton pressConfirm={pressConfirm} />
          <ResetButton resetInput={this.props.actions.resetInput}/>
          <BackButton/>
        </div>
        <Money takeMoney={this.props.actions.takeMoney} cash={cash}/>
        <Wallet/>
      </div>
    )
  }

}


export default App;
