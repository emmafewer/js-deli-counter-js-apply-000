// array katzDeliLine

function takeANumber(currLine,name) {
  currLine.push(name)
  return `Welcome, ${name}. You are number ${currLine.length} in line.` 
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
  return "The line is currently empty."
}
  var custAndNames = []
  for (let i=0; i<line.length; i++) {
    custAndNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${custAndNames.join(', ')}`
}

