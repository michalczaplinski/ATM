import * as types from './actionTypes';

const correctPIN = "1234";

export function insertCard() {
  return (dispatch) => {
    dispatch(showLoadingScreen());
    dispatch(updateCardSlot());
    setTimeout(() => {
      dispatch(showPinEntryScreen());
    }, 1000);
  }
}

export function updateCardSlot() { return { type: types.UPDATE_CARD_SLOT }}
export function showLoadingScreen() { return { type: types.LOADING } }
export function showPinEntryScreen() { return { type: types.SHOW_PIN_ENTRY } }

export function onKeypress(value) {
  return { type: types.KEYPAD_PRESS,
           value: value }
}

export function resetInput() { return { type: types.REEST_INPUT }}
export function checkPIN(pin) { return { type: types.PIN_SUCCESS } }

export function OKPress() {

  return (dispatch, getState) => {
    dispatch(showLoadingScreen());
    dispatch(resetInput());

    setTimeout(() => {
      let pin = getState().ui.input;
      if (pin == correctPIN) {
        dispatch(checkPIN(pin));
      } else {
        dispatch()
      }
    }, 1000)
  }
}

