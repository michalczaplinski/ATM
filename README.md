To install: 
```shell
git clone git@github.com:michalczaplinski/ATM.git
cd ATM
npm install 
npm run start
```

The implementation uses react and redux. I think that the explanation of the redux architecture would be beyond the scope of this `README`, so the comments in code would assume some familiarity with those frameworks.

Some assumptions and limitations of the implementation:
  - The pin can only be 4 digits long. Any character inputted following the first 4 will be ignored, which I believe is how a real cash machine behaves.
  - The ATM allows the user to enter the incorrect PIN without limit, as it was not required per brief.
  - It is only possible to withdraw multiples of 10, even when selecting the amount manually, as an ATM cannot dispense coins, of course.
  - There is no arbitrary limit to how much money one can take out, since that was not specified in the brief, but that would be trivial to add on.
  - Likewise the program does not keep track of how much money or how many times it is taken out, so, we are sort of assuming that the ATM has an infinite supply of cash.
  - The ATM will give the user 20 seconds to collect the money and the card. Otherwise, they are sucked back in the by the machine, so we can kind of imagine that each complete ATM transaction is performed by a different user in order to make the behaviour believable.



