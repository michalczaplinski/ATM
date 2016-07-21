import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import configureStore from './store/configureStore';
import App from './components/App';

// my CSS STYLES
import styles from './style.css'

const store = configureStore({
  transaction: {
    state: 'initial',   // states: 'initial', 'pin_entry', 'select_amount', 'withdrawing'
    isWithdrawing: false,
    isAborting: false,
    isLoading: false,
    cardState: 'in_wallet',  // possible states: 'in', 'out', 'in_wallet'
    moneyOut: false,
    amountWithdrawn: ''
  },
  ui: {
    text: 'Please insert your card',
    input: '',
    slotText: 'Insert card'
  }
});

const Application = connect(
  (state) =>  state,
  (dispatch) => { return { actions: bindActionCreators(actions, dispatch)} }
)(App);


render(
  <Provider store={store}>
   <Application/>
  </Provider>, document.getElementById('app')
);
