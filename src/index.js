
var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./friends-names.json');

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
