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

assert.equal( silph( item_object, "item.title" ), "Burger Item", "should return 'Burger Item'" );

assert.equal( silph( item_array, "0" ), "ballpen-item", "should return 'ballpen-item'" );

assert.deepEqual( silph( merchant_array, "2.logo" ), { "reference": "ref1", "path": "path1" }, "should be deeply equal" );

assert.equal( silph( merchant_array, "2.logo.reference" ), "ref1", "should return 'ref1'" );


console.log( "ok" );
