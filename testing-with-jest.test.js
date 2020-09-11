// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

//name function
describe("addThemUp", () => {
//state the goal
  test("take two numbers and add them together", () => {
//give examples
    expect(addThemUp(2, 7)).toEqual(9)
    expect(addThemUp(-3, 4)).toEqual(1)
    expect(addThemUp(-5, -12)).toEqual(-17)
  })
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
  //return sum of two numbers
  return num1 + num2
}

addThemUp(2, 7)
addThemUp(-3, 4)
addThemUp(-5, -12)

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

//name the function
describe("triangleArea", () => {
  //state the goal
  test("supply area of triangle given arguments base and height", () => {
    //give examples
    expect(triangleArea(1, 1)).toEqual(0.5)
    expect(triangleArea(2, 4)).toEqual(4)
    expect(triangleArea(127, 236)).toEqual(14986)
  })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.

 const triangleArea = (base, height) => {
   //formula for area of triangle
   return base * height / 2
 }

triangleArea(1, 1)
triangleArea(2, 4)
triangleArea(127, 236)
