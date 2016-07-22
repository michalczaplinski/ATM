import * as types from './actionTypes';

import { correctPIN, cardStates, ATMstates } from '../constants';

// the variable which stores the reference to the setTimoeut function
var reset;

// invoked upon aborting another action.
export function abort() {
  return (dispatch, getState) => {
    dispatch({ type: types.SHOW_ABORT_SCREEN });
    setTimeout(() => {
      dispatch({ type: types.ABORT });
    }, 2000)
  }
}

// invoked when a card is first inserted into the ATM
export function insertCard() {
  return (dispatch) => {
    dispatch({ type: types.LOADING });
    dispatch({ type: types.CLEAR_CARD_SLOT });
    setTimeout(() => {
      dispatch({ type: types.SHOW_PIN_ENTRY });
    }, 2000);
  }
}


// invoked when ATM picking up the card from ATM after aborting
export function abortTakeCard() {
  return (dispatch, getState) => {
    dispatch({ type: types.TAKE_CARD });
    dispatch(resetState());
  }
}

// resets the state to the initial values
export function resetState() {
  clearTimeout(reset);
  return { type: types.RESET_STATE }
}

// invoked on pressing one of the numbers on the keypad.
export function onKeypress(value) {
  return { type: types.KEYPAD_PRESS, value: value }
}

// invoked when pressing the OK button upon confirming the PIN
export function confirmPIN() {
  return (dispatch, getState) => {

    let pin = getState().ui.input;

    dispatch({ type: types.LOADING });
    dispatch({ type: types.RESET_INPUT });

    // continue after 2 seconds. Check if the PIN was correct
    setTimeout(() => {
      pin == correctPIN
        ? dispatch({ type: types.PIN_SUCCESS })
        : dispatch({ type: types.PIN_FAILURE})
    }, 2000)
  }
}

//
export function selectAmount(value) {
  return { type: types.SELECT_AMOUNT,
           value: value
  }
}

// invoked when pressing the OK button upon selecting the amount to withdraw.
export function confirmAmount(value) {
  return (dispatch, getState) => {

    // if the amount is not a multiple of 10, return nothing
    if (value % 10 !== 0) {
      dispatch({type: types.AMOUNT_NOT_DIVISIBLE_BY_10});
      dispatch({ type: types.RESET_INPUT });
      return
    }

    dispatch(withdraw(value));

    // return card and give money after 3.5 seconds.
    setTimeout(() => {
      dispatch({ type: types.SHOW_MONEY });
      dispatch({ type: types.RETURN_CARD });
    }, 3500);

    // Set a timeout of 20 seconds during which the user can retrieve the card and money
    // save the result in the 'reset' variable that we can clear when the user picks up
    // both the money and card sooner than in 20 seconds.
    reset = setTimeout(() => {
      dispatch(resetState());
    }, 20000);
  }
}

// invoked inside the 'confirmAmount' action
export function withdraw(amount) {
  return { type: types.WITHDRAW,
           amount: amount
  }
}

// invoked when the user takes the dispensed cash.
export function takeMoney() {
  return (dispatch, getState) => {
    dispatch({ type: types.TAKE_MONEY });

    // if the card was also picked up, that means that there is nothing left to do
    // and we can return to the initial state.
    if (getState().transaction.cardState == cardStates.in_wallet) {
      dispatch(resetState());
    }
  }
}

// invoked when picking up the card from ATM after withdrawing cash.
export function withdrawTakeCard() {
  return (dispatch, getState) => {
    dispatch({ type: types.TAKE_CARD });
    dispatch({ type: types.CLEAR_CARD_SLOT });
    if (getState().transaction.moneyOut == false) {
      dispatch(resetState());
    }
  }
}

// go back based on the current ATM state.
// PIN entry -> initial state
// Select amount -> PIN entry
export function goBack() {
  return (dispatch, getState) => {
    const state = getState().transaction.state;
    if (state == ATMstates.pin_entry) {
      dispatch(abort());
    } else if (state == ATMstates.select_amount) {
      dispatch({ type: types.BACK_TO_PIN })
    }
  }
}
