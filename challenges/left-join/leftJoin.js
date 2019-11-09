function leftJoin(tableOne, tableTwo) {
  const results = [];
  // for (let i = 0; i < tableOne.bucket.length; i++) {
  //   if (tableOne.bucket[i] && tableOne.bucket[i].length) {
  //     results.push(tableOne.bucket[i][0]);
  //   }
  // }
  for (let i = 0; i < tableOne.bucket.length; i++) {
    if (tableOne.bucket[i] !== undefined) {
      results.push(tableOne.bucket[i]);
    }
  }

  for (let i = 0; i < tableTwo.bucket.length; i++) {
    if (tableTwo.bucket[i] !== undefined) {
      results.forEach(kv => {
        if (tableTwo.bucket[i][0] === kv[0]) {
          kv.push(tableTwo.bucket[i][1]);
        }
      });
    }
  }

  results.forEach(result => {
    if (result.length === 2) {
      result.push(null);
    }
  });

  return results;
}

module.exports = leftJoin;

// for (let j = 0; j < tableTwo.bucket.length; j++) {
//   if (tableTwo.bucket[j] && tableTwo.bucket[j].length > 0) {
//     if (tableOne.get(tableTwo.bucket[j][0][0])) {
//       for (let k = 0; k < results.length; k++) {
//         if (results[k][0] === tableTwo.bucket[j][0][0]) {
//           results[k].push(tableTwo.bucket[j][0][1]);
//         }
//       }
//     }
//   }
// }

//   results.forEach(array => {
//     if (array.length === 2) array.push(null);
//   });
//   return results;
// }

// module.exports = leftJoin;
