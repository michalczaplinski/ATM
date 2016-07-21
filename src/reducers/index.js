// Set up your root reducer here...
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

import { ATMstates, cardStates } from '../constants';
import * as types from '../actions/actionTypes';

function ui(state = {}, action) {
  switch (action.type) {

    case types.ABORT:
      return objectAssign({}, state, {
        text: 'Please take your card.',
        slotText: 'Click to take your card.',
        input: ''
      });

    case types.LOADING:
      return objectAssign({}, state, {
        text: 'Please wait...'
      });

    case types.CLEAR_CARD_SLOT:
      return objectAssign({}, state, {
        slotText: ''
      });

    case types.SHOW_PIN_ENTRY:
      return objectAssign({}, state, {
        text: 'Please enter your PIN:'
      });

    case types.KEYPAD_PRESS:
      return objectAssign({}, state, {
        input: state.input.length < 4 ? state.input.concat(action.value) : state.input
      });

    case types.RESET_INPUT:
      return objectAssign({}, state, {
        input: ''
      });

    case types.PIN_SUCCESS:
      return objectAssign({}, state, {
        text: 'Select amount to withdraw:'
      });

    case types.PIN_FAILURE:
      return objectAssign({}, state, {
        text: 'Your PIN was incorrect. Please try again:'
      });

    case types.SELECT_AMOUNT:
      return objectAssign({}, state, {
        input: action.value
      });

    case types.WITHDRAW:
      return objectAssign({}, state, {
        text: 'Hold on, moneyz coming your way',
        input: ''
      });

    case types.RETURN_CARD:
      return objectAssign({}, state, {
        text: 'Take your card and money.',
        slotText: 'Click to take your card.'
      });

    case types.RESET_STATE:
      return objectAssign({}, state, {
        text: 'Please insert your card',
        slotText: 'Insert card',
        input: ''
      });

    default:
      return state
  }
}

function transaction(state = {}, action) {
  switch (action.type) {

    case types.ABORT:
      return objectAssign({}, state, {
        isAborting: true,
        state: ATMstates.initial  // ?
      });

    case types.TAKE_CARD:
      return objectAssign({}, state, {
        cardState: cardStates.in_wallet
      });

    case types.RESET_STATE:
      return objectAssign({}, state, {
        isAborting: false,
        isWithdrawing: false,
        isLoading: false,
        state: ATMstates.initial,
        cardState: cardStates.in_wallet,
        moneyOut: false
      });

    case types.LOADING:
      return objectAssign({}, state, {
        isLoading: true
      });

    case types.SHOW_PIN_ENTRY:
      return objectAssign({}, state, {
        isLoading: false,
        state: ATMstates.pin_entry,
        cardState: cardStates.in
      });

    case types.PIN_SUCCESS:
      return objectAssign({}, state, {
        state: ATMstates.select_amount
      });

    case types.WITHDRAW:
      return objectAssign({}, state, {
        isWithdrawing: true,
        state: ATMstates.withdrawing,
        amountWithdrawn: action.amount
      });

    case types.SHOW_MONEY:
      return objectAssign({}, state, {
        moneyOut: true
      });

    case types.TAKE_MONEY:
      return objectAssign({}, state, {
        moneyOut: false
      });

    case types.RETURN_CARD:
      return objectAssign({}, state, {
        cardState: cardStates.out
      });


    default:
      return state
  }
}


export default combineReducers({
  ui,
  transaction
});
