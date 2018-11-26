function bracesvalid(str) {

    if (str.length <= 1)
      return false
  
    var OpenBracketMatch; 
    var arr = []
    var openBrackets = ['[', '{', '(']
    var closeBrackets = [']', '}', ')']
  
    for (var i = 0; i < str.length; i++) {
      x = str[i]
  
      if (closeBrackets.indexOf(x) > -1) {
        OpenBracketMatch = openBrackets[closeBrackets.indexOf(x)]
        if (arr.length == 0 || (arr.pop() != OpenBracketMatch)) {
          return false
        }
      } else {
        arr.push(x)
      }
    }
  
    return (arr.length === 0)
  }
  console.log (bracesvalid("[{({}[])([]})}]"))