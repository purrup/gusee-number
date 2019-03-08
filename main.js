let answer = Number(window.prompt("please assign a number between 1 and 100."))
let guess = 0
let guessTimes = 0

while (answer < 1 || answer > 100 || isNaN(answer) === true) {
  answer = Number(window.prompt("please assign a number between 1 and 100."))
}
console.log(`the answer is  ${answer}.`)

while (guess !== answer) {
  let guess = Math.floor(Math.random() * 100 + 1)
  if (guess > answer) {
    console.log(`computer guess ${guess} . TOO BIG!`)
  } else if (guess < answer) {
    console.log(`computer guess ${guess}. TOO SMALL!`)
  } else if (guess === answer) {
    console.log(`computer guess ${guess}. CORRECT!`)
    break
  }
  guessTimes++
}
console.log(`computer has guessed ${guessTimes} time(s).`)


