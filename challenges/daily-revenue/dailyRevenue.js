function dailyRevenue(transactions) {

  let results = {};

  transactions.map(purchase => {
    const date = purchase.timestamp; 
    const utcDate = new Date(date)
      .toUTCString()
      .split(',')
      .join('')
      .substring(0, 15);
    const dateFormat = new Date(utcDate).toDateString();
    const val = purchase.price;
    results[dateFormat] ? results[dateFormat] += val : results[dateFormat] = val;
  });

  return results;
}

module.exports = {
  dailyRevenue,
};