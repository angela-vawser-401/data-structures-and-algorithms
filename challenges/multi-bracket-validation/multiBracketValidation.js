function bracketValidator(input) {
  const { Stack } = require('../stack-and-queue/stacksAndQueues');
  const bracketStack = new Stack();
  const refArray = ['(', ')', '[', ']', '{', '}'];
  const bracketArray = input.match(/[({[)}\]]/g);
  for (let i = 0; i < bracketArray.length; i++) {
    let popNode;
    if (bracketArray[i] === '(' || bracketArray[i] === '[' || bracketArray[i] === '{') {
      bracketStack.push(bracketArray[i]);
    } else {
      popNode = bracketStack.pop();
      if (!popNode) return false;
      let closedIndex = refArray.indexOf(bracketArray[i]);
      let openIndex = refArray.indexOf(popNode);
      if (closedIndex !== openIndex + 1) return false;
    }
  }
  return true;

}

module.exports = bracketValidator;