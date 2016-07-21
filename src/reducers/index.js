// Set up your root reducer here...
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

import { states } from '../constants';
import * as types from '../actions/actionTypes';

function ui(state = {}, action) {
  switch (action.type) {

    case types.CANCEL:
      return objectAssign({}, state, {
        text: 'Please take your card.',
        slotText: 'Click to take your card.',
        input: ''
      });

    case types.CARD_RETRIEVED:
      return objectAssign({}, state, {
        text: 'Please insert your card',
        slotText: 'Insert card'
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


    case types.SHOW_PREPARATION_SCREEN:
      return objectAssign({}, state, {
        amountWithdrawn: action.amount,
        text: 'Hold on, moneyz coming your way'
      });

    case types.TAKE_CARD_AND_MONEY:
      return objectAssign({}, state, {
        text: 'Please take your card and money.',
        slotText: 'Click to take your card.',
        input: ''
      });


    case types.TAKE_MONEY:
      return objectAssign({}, state, {

      });

    default:
      return state
  }
}

function transactionState (state = {}, action) {
  switch (action.type) {

    case types.CANCEL:
      return objectAssign({}, state, {
        isAborting: true,
        state: states.initial
      });

    case types.CARD_RETRIEVED:
      return objectAssign({}, state, {
        isAborting: false,
        isWithdrawing: false,
        isLoading: false,
        state: states.initial,
        cardIn: false
      });

    case types.LOADING:
      return objectAssign({}, state, {
        isLoading: true
      });

    case types.SHOW_PIN_ENTRY:
      return objectAssign({}, state, {
        isLoading: false,
        state: states.pin_entry,
        cardIn: true
      });

    case types.PIN_SUCCESS:
      return objectAssign({}, state, {
        state: states.select_amount
      });

    case types.TAKE_CARD_AND_MONEY:
      return objectAssign({}, state, {
        isWithdrawing: true,
        state: states.taking_money
      });


    case types.TAKE_MONEY:
      return objectAssign({}, state, {
        state: states.initial
      });

    default:
      return state
  }
}


export default combineReducers({
  ui,
  transactionState
});
