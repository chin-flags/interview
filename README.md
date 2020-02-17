# Interview repo

This repo contains the base of a create-react-app application. Use it as a base to create a calculator with the following features:

1. addition
1. substraction
1. multiplication
1. division
1. parenthesis 

##restriction

- you cannot use the eval function
- no mathematics library is permited, only the base Math object is fair game
- priorities of operations are to be respected 2 * ( 5 - 2) must equal 6

## goals

1. focus on writting clear code and organising well the files. 
1. use any UI library of your choice
1. Be creative!

## My solution

Here I used "shunting yard algorithm" to evaluate the mathematical expression. 
- First key board inputs are filtered based on computation rules (ex: 3 +- 1, 3+(3 , 455+ are invalid) and the expression is created as a string.
- Then the infix notation (ex  3+4-5 ) is converted to postfix notation (ie 3 4 + 5 -) and final result is obtained 


## to-do

- add opptional key pad
- Implement for mobile 
- ability to store and retrive values 
- Further funtionalities (%,mod etc)
- ability to change input (currently only 'Backspace' is availble)
- Add animations - spice things up !