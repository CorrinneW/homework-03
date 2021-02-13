# homework-03
password generator assignment

## The Assignment
Refactor existing code to return a randomly generated password based on user input.

## What I Did
1. Created a function that prompts user for a desired number of password characters.
  • If user enters a number outside of parameters (min 8, max 128), they receive an alert and are returned to password length prompt.

2. If user enters a valid password length, a series of confirm windows are triggered that allow user to select from lowercase letters, uppercase letters, numbers and symbols to include in their password.
  • If user refuses all character types, they are alerted.
  • When user selects a character type, corresponding characters of that type are loaded into an array from which the password will pull random values.

3. Using only the character types selected, a random password of the requested length is written to the page for the user to copy.

## The Result

A simple, effective and customizable password generator.

https://corrinnew.github.io/homework-03/

![screenshot-1.PNG](https://github.com/CorrinneW/homework-03/blob/main/images/screenshot-1.PNG)

![screenshot-2.PNG](https://github.com/CorrinneW/homework-03/blob/main/images/screenshot-2.PNG)

![screenshot-3.PNG](https://github.com/CorrinneW/homework-03/blob/main/images/screenshot-3.PNG)
