export const correctPIN = '1234';

// here are all the ATM states. We store them as variables so that we
// can take advantage of IDE's intelligence in case misspell the name.
export const ATMstates = {
  initial: 'initial',
  pin_entry: 'pin_entry',
  select_amount: 'select_amount',
  withdrawing: 'withdrawing',
  success: 'success'
};

export const cardStates = {
  in: 'in',
  out: 'out',
  in_wallet: 'in_wallet'
};
