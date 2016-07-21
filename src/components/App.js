import React, { Component, PropTypes } from 'react';

import LeftSideButtons from './LeftSideButtons';
import RightSideButtons from './RightSideButtons';
import Screen from './Screen';
import Keypad from './Keypad';
import CardSlot from './CardSlot';
import CancelButton from './CancelButton';
import OKButton from './OKButton';

import Wallet from './Wallet';
import Money from './Money';


class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container">
        <div className="screen-container">
          <LeftSideButtons/>
          <Screen text={this.props.ui.text}
                  input={this.props.ui.input}
                  state={this.props.transactionState.state}
          />
          <RightSideButtons/>
        </div>
        <div className="keys-container">
          <Keypad state={this.props.transactionState.state}
                  onKeypress={this.props.actions.onKeypress}/>
          <CardSlot insertCard={this.props.actions.insertCard}
                    slotText={this.props.ui.slotText}
                    state={this.props.transactionState.state}
          />
          <CancelButton/>
          <OKButton OKPress={this.props.actions.OKPress}
                    state={this.props.transactionState.state}
          />
        </div>

        <Money/>
        <Wallet/>
      </div>
    )
  }

}


export default App;
