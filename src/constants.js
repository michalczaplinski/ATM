export const correctPIN = '1234';

// here are all the ATM states. We store them as variables so that we
// can take advantage of IDE's intelligence in case misspell the name.
export const states = {
  initial: 'initial',
  pin_entry: 'pin_entry',
  select_amount: 'select_amount',
  taking_money: 'taking_money',
  success: 'success'
};
