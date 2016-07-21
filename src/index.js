// Set up your application entry point here...

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
  transactionState: {
    state: 'initial',   // states: 'initial', 'pin_entry', 'select_amount', 'taking_money',
    isWithdrawing: false,
    isAborting: false,
    isLoading: false,
    cardIn: false
  },
  ui: {
    text: 'Please insert your card',
    input: '',
    slotText: 'Insert card',
    amountWithdrawn: ''
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
