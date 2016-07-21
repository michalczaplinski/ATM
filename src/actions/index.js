import * as types from './actionTypes';

import { correctPIN, cardStates } from '../constants';

export function abort() { return { type: types.ABORT } }

// the variable which stores the reference to the setTimoeut function
var reset;


export function insertCard() {
  return (dispatch) => {
    dispatch(showLoadingScreen());
    dispatch(clearCardSlot());
    setTimeout(() => {
      dispatch(showPinEntryScreen());
    }, 2000);
  }
}
export function clearCardSlot() { return { type: types.CLEAR_CARD_SLOT }}
export function showLoadingScreen() { return { type: types.LOADING } }
export function showPinEntryScreen() { return { type: types.SHOW_PIN_ENTRY } }


export function abortTakeCard() {
  return (dispatch, getState) => {
    dispatch(takeCard());
    dispatch(resetState());
  }
}
export function takeCard() { return { type: types.TAKE_CARD } }
export function withdrawTakeCard() {
  return (dispatch, getState) => {
    dispatch(takeCard());
    dispatch(clearCardSlot());
    if (getState().transaction.moneyOut == false) {
      dispatch(resetState());
    }
  }
}

export function resetState() {
  clearTimeout(reset);
  return { type: types.RESET_STATE }
}


export function onKeypress(value) {
  return { type: types.KEYPAD_PRESS, value: value }
}

export function resetInput() { return { type: types.RESET_INPUT } }
export function pinSuccess() { return { type: types.PIN_SUCCESS } }
export function pinFailure() { return { type: types.PIN_FAILURE} }

export function confirmPIN() {
  return (dispatch, getState) => {

    let pin = getState().ui.input;

    dispatch(showLoadingScreen());
    dispatch(resetInput());

    setTimeout(() => {
      pin == correctPIN ? dispatch(pinSuccess()) : dispatch(pinFailure())
    }, 2000)
  }
}

export function selectAmount(value) { return { type: types.SELECT_AMOUNT, value: value} }

export function confirmAmount(value) {
  return (dispatch, getState) => {
    dispatch(withdraw(value));

    setTimeout(() => {
      dispatch(showMoney());
      dispatch(returnCard());
    }, 2000);

    reset = setTimeout(() => {
      dispatch(resetState());
    }, 20000);
  }
}
export function withdraw(amount) { return { type: types.WITHDRAW, amount: amount } }
export function showMoney() { return { type: types.SHOW_MONEY } }
export function returnCard() { return { type: types.RETURN_CARD } }

export function takeMoney() {
  return (dispatch, getState) => {
    dispatch({ type: types.TAKE_MONEY });
    if (getState().transaction.cardState == cardStates.in_wallet) {
      dispatch(resetState());
    }
  }
}
