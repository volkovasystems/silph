const assert = require( "assert" );
const silph = require( "./silph.js" );

let item_object = {
	"item": {
		"name": "burger-item",
		"title": "Burger Item"
	}
};

let item_array = [
	"ballpen-item",
	"Ballpen Item"
];

let merchant_array = [
	"biyaheroes-team",
	"pure-gold",
	{
		"logo": {
			"reference": "ref1",
			"path": "path1"
		}
	}
];

assert.equal( silph( item_object, "item.title" ), "Burger Item", "should be equal to 'Burger Item'" );

assert.equal( silph( item_array, "0" ), "ballpen-item", "should be equal to 'ballpen-item'" );

assert.deepEqual( silph( merchant_array, "2.logo" ), { "reference": "ref1", "path": "path1" },
	"should be equal to { 'reference': 'ref1', 'path': 'path1' }" );

assert.equal( silph( merchant_array, "2.logo.reference" ), "ref1", "should be equal to 'ref1'" );

console.log( "ok" );
