let opcode = [1, 9, 10, 3, 2, 3, 11, 0, 99]

function alarm(input) {
  let i = 0;
  let x = 3;
  let d = input[x];

  while (i <= input.length) {
    if (input[i] == 1) {
      input[d] = input[i + 1] + input[i + 2]
    } else if (input[i] == 2) {
      input[d] = input[i + 1] * input[i + 2]
    } else if (input[i] == 99) {
      return input
    } else {
      console.log("Invalid command")
      return input
    }
    i += 4
    d = input
  }
  return input
}

alarm(opcode)