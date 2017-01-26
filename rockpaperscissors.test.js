var expect = require('chai').expect;
var rng = require('./rockpaperscissors')

describe('Test', function() {
  describe('compare()', function() {
    it('compare(rock, scissors) should return User Wins', function() {
      var whoWins = compare('rock', 'scissors');
      expect(whoWins).to.equal('User wins!');
    })
  })
})
