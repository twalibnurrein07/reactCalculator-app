const add =(x,y)=>{
    return x + y;
}

const subtract = (x,y)=>{
    return x-y
}
const multiply = (x,y)=>{
    return x*y
}
const division = (x,y)=>{
    return x/y
}




switch(value) {
    case '+':
      const answer1 =add(digit1,digit2)
      console.log(answer1)
      // code block
      break;
    case '-':
      // code block
      const answer2 =subtract()
      break;
      case '*':
      // code block
      const answer3 =multiply()
      break;
      case '/':
      // code block
      const answer4 =division()
      break;
    default:
      // code block
  }



export {add,subtract,multiply,division}