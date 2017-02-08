var expect = require('chai').expect;
var rng = require('./rockpaperscissors')

describe('Test', function() {
  describe('compare()', function() {
    it('compare(rock, scissors) should return `You Win!` ', function() {
      var whoWins = compare('rock', 'scissors');
      expect(whoWins).to.equal('You win!');
    })
  }),
  describe('compare()', function() {
    it('compare()', function() {
      it('compare(rock, paper) should return `Computer wins!`', function() {
        var whoWins = compare('rock', 'paper');
        expect(whoWins).to.equal('Computer wins!');
      })
    })
  }),
  describe('compare()', function() {
    it('compare()', function() {
      it("compare(rock, rock) should return `It's a tie!`", function() {
        var whoWins = compare('rock', 'rock');
        expect(whoWins).to.equal("It's a tie!")
      })
    })
  })
})
