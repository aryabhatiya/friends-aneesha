var uniqueRandomArray = require('unique-random-array');
var nameOfFriendsOfAneesha = require('./friends-names.json');
var getRandomItem = uniqueRandomArray(nameOfFriendsOfAneesha);
var randomItems = [];

module.exports = {
  all: nameOfFriendsOfAneesha,
  random: random,
  pair: pair
};

function random(number){
  if (number === undefined){
    return getRandomItem();
  }
  if ( number > 0 ){
    randomItems.push(getRandomItem());
    return random( number - 1);
  }
  return randomItems;
}

function pair(n) {
  var sequence = [];
  sequence[0] = nameOfFriendsOfAneesha[ (n -1 ) % nameOfFriendsOfAneesha.length ];
  sequence[1] = nameOfFriendsOfAneesha[ n % nameOfFriendsOfAneesha.length ];
  return sequence;
}
