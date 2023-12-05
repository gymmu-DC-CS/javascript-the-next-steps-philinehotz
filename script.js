export function exercise01(args) /*defining the function*/ {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push ("")
    }
    else {
       result.push(currentElement)
    } 
  }
  return result.join("") 

}

export function exercise02(args) {
  return args.toUpperCase()
}








/*between the curly brackets defines whats the function does */
/*result = endproduct*/
/*computer starting counting at zero*/
/*i++ shortcut for decrease by one*/
/*return result.join("") --> add or delete pieces between letters*/
/* not equals --> currentElement != "e" &&  */