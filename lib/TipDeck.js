var path = require('path'),
    Tip  = require(path.join(__dirname, 'Tip'));

var TipDeck = function () {};

TipDeck.prototype.addTip = function () {
	return new Tip();
};


module.exports = TipDeck;