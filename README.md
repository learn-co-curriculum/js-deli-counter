# Deli Counter Lab

## Objectives
1. Add elements to an array
2. Return items from an array
3. Iterate through an array
4. Pass an array as a function parameter

## Instructions

A pretty important deli needs somebody to program the "Take a Number" feature for their counter.

At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,

`var katzDeli = [];`

1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

2. Build a function `nowServing`. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`

### Hint

Example usage:

```javascript
var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
```

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-deli-counter' title='Deli Counter Lab'>Deli Counter Lab</a> on Learn.co and start learning to code for free.</p>
