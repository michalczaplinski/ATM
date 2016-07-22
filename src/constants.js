// Here are all the state constants.
// We store them as variables so that we can take advantage of IDE's
// intelligence in case we misspell the name, etc.

export const correctPIN = '1234';

export const ATMstates = {
  initial: 'initial',
  pin_entry: 'pin_entry',
  select_amount: 'select_amount',
  withdrawing: 'withdrawing'
};

export const cardStates = {
  in: 'in',
  out: 'out',
  in_wallet: 'in_wallet'
};
