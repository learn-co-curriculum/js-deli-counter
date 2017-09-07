const EMPTY = "The line is currently empty."
const NOBODY = "There is nobody waiting to be served!"

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  return line.length > 0 ? `Currently serving ${line.shift()}.` : NOBODY
}

function lineToString(line) {
  return "The line is currently:".concat(line.map((meatBag, idx) => (
    ` ${idx+1}. ${meatBag}`)).join()
  )
}

function currentLine(line) {
  return line.length > 0 ? lineToString(line) : EMPTY
}
