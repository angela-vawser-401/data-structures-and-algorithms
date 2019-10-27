function dateAdder(dateObj, diff) {
  let result;
  const diffOperator = diff.slice(diff.length - 1);
  const diffNumber = Number(diff.slice(0, diff.length - 1));

  if(diffOperator === 's') result = new Date(dateObj.setSeconds(dateObj.getSeconds() + diffNumber));
  if(diffOperator === 'm') result = new Date(dateObj.setMinutes(dateObj.getMinutes() + diffNumber));
  if(diffOperator === 'h') result = new Date(dateObj.setHours(dateObj.getHours() + diffNumber));
  if(diffOperator === 'd') result = new Date(dateObj.setDate(dateObj.getDate() + diffNumber));
  if(diffOperator === 'w') result = new Date(dateObj.setDate(dateObj.getDate() + diffNumber * 7));
  if(diffOperator === 'M') result = new Date(dateObj.setMonth(dateObj.getMonth() + diffNumber));
  if(diffOperator === 'y') result = new Date(dateObj.setFullYear(dateObj.getFullYear() + diffNumber));

  return result;
}

module.exports = dateAdder;