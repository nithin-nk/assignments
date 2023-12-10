/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const trans = [{
    id:1,
    timestamp:1659590,
    price: 15,
    category:'food',
    itemnane:'pizza'
    },{
      id:2,
      timestamp:243234,
      price:18,
      category:'drink',
      itemname:'coke'
    },{
      id:3,
      timestamp:7475757,
      price:89,
      category:'toys',
      itemname:'car'

    }]
    for(const j of trans){
      for(const i of trans){
        if(j.category == (i+1).category ){
          console.log()
        }
      }
    }
  return [];
}

module.exports = calculateTotalSpentByCategory;
