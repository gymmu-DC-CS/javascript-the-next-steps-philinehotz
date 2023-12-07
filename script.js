export function exercise01(args) /*defining the function*/ {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  let result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

/*between the curly brackets defines whats the function does*/
/*result = endproduct*/
/*computer starting counting at zero*/
/*i++ shortcut for decrease by one*/
/*return result.join("") --> add or delete pieces between letters*/
/* not equals --> currentElement != "e" &&  */

/* (07.12.23)
-permitive data types-
 int: (integers)
 float: (floatng point numers)
 */
/* string: (text)

array: (list of things) --> const a = [1,4,9,16]
a [2] = 9
a [-1] = 16
a.push (81) --> [1,4,9,16,81]
a.join ("_") --> 1-2-

booleau: true or false

protected terms: true, false, null --> nothing

/* ESA - ariane 5 ... 4 --> a story */
