var path    = require('path'),
    buster  = require('buster'),
    TipDeck = require(path.join(__dirname, '../'));

buster.testCase('TipDeck', {
	'init': function () {
		var tipDeck = new TipDeck();

		assert(tipDeck);
	},
	'add tip': function () {
		var tipDeck = new TipDeck();
		assert(tipDeck.addTip({
			'tagName': 't',
			'className': 'hoge',
			'text': 'moge'
		}));

		assert(tipDeck.addTip('t.hoge moge'));
	}
});