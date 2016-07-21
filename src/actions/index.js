import * as types from './actionTypes';

import { correctPIN } from '../constants';

export function cancel() { return { type: types.CANCEL } }

export function insertCard() {
  return (dispatch) => {
    dispatch(showLoadingScreen());
    dispatch(updateCardSlot());
    setTimeout(() => {
      dispatch(showPinEntryScreen());
    }, 2000);
  }
}

export function takeCard() { return { type: types.CARD_RETRIEVED }}

export function updateCardSlot() { return { type: types.CLEAR_CARD_SLOT }}
export function showLoadingScreen() { return { type: types.LOADING } }
export function showPinEntryScreen() { return { type: types.SHOW_PIN_ENTRY } }

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

export function selectAmount(value) {
  return { type: types.SELECT_AMOUNT, value: value}
}

export function showPreparingScreen(amount) { return { type: types.SHOW_PREPARATION_SCREEN, amount: amount } }
export function takeCardAndMoney() { return { type: types.TAKE_CARD_AND_MONEY } }


export function confirmAmount(value) {
  return (dispatch, getState) => {
    dispatch(showPreparingScreen(value));

    setTimeout(() => {
      dispatch(takeCardAndMoney())
    }, 2000)
  }
}

export function takeMoney() { return { type: types.TAKE_MONEY } }
