// Set up your root reducer here...
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

import * as types from '../actions/actionTypes';

// it's a global variable, as there is only one correct pin at the time
const correctPIN = "1234";

function ui(state = {}, action) {
  switch (action.type) {
    case types.LOADING:
      return objectAssign({}, state, {
        text: 'Please wait...'
      });

    case types.UPDATE_CARD_SLOT:
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

    case types.REEST_INPUT:
      return objectAssign({}, state, {
        input: ''
      });

    case types.PIN_SUCCESS:
      return objectAssign({}, state, {
        text: 'Select amount to withdraw:'
      });

    default:
      return state
  }
}

function transactionState (state = {}, action) {
  switch (action.type) {
    case types.LOADING:
      return objectAssign({}, state, {
        isLoading: true
      });

    case types.SHOW_PIN_ENTRY:
      return objectAssign({}, state, {
        isLoading: false,
        state: 'pin_entry'
      });

    case types.PIN_SUCCESS:
      return objectAssign({}, state, {
        state: 'select_amount'
      });

    default:
      return state
  }
}


export default combineReducers({
  ui,
  transactionState
});
