# Deli Counter - Take a Number

## Objectives
+ Add elements to an array
+ Return items from an array
+ Iterate through an array
+ Pass an array as a function parameter

## Instructions

A pretty important deli needs somebody to program the "Take a Number" feature for their counter.

At the beginning of the day, the deli is empty and is represented by an empty array.
eg.

`var katzDeli = [];`

1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeli`, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

2. Build a function `nowServing`. This function should return the next person in line and then remove them from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

3. Build a function `line` that returns people their current place in line. If there is nobody in line, it should return "The line is currently empty."

### Hint

Example usage:

  ```javascript
  var katzDeli = [];

  takeANumber(katzDeli, "Ada"); // 1
  takeANumber(katzDeli, "Grace"); // 2
  takeANumber(katzDeli, "Kent"); // 3

  line(katzDeli); // "The line is currently: 1. Ada 2. Grace 3. Kent"

  nowServing(katzDeli); // "Currently serving Ada."

  line(katzDeli); // "The line is currently: 1. Grace 2. Kent"

  takeANumber(katzDeli, "Matz"); // "3"

  line(katzDeli); // "The line is currently: 1. Grace 2. Kent 3. Matz"

  nowServing(katzDeli); // "Currently serving Grace."

  line(katzDeli); // "The line is currently: 1. Kent 2. Matz"
  ```

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-deli-counter' title='Deli Counter - Take a Number'>Deli Counter - Take a Number</a> on Learn.co and start learning to code for free.</p>
