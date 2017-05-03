const assert = require( "assert" );
const silph = require( "./silph.js" );

var item_object = {
	"item": {
		"name": "burger-item",
		"title": "Burger Item"
	}
};

var item_array = [
	"ballpen-item",
	"Ballpen Item"
];

var merchant_array = [
	"biyaheroes-team",
	"pure-gold",
	{
		"logo": {
			"reference": "ref1",
			"path": "path1"
		}
	}
];

assert.equal( silph( item_object, "item.title" ), "Burger Item" );
assert.equal( silph( item_object, "item.name" ), "burger-item" );
assert.deepEqual( silph( item_object, "item" ), { "name": "burger-item", "title": "Burger Item" } );
assert.equal( silph( item_array, "0" ), "ballpen-item" );
assert.equal( silph( item_array, "1" ), "Ballpen Item" );
assert.equal( silph( merchant_array, "0" ), "biyaheroes-team" );
assert.equal( silph( merchant_array, "1" ), "pure-gold" );
assert.deepEqual( silph( merchant_array, "2" ), { "logo": { "reference": "ref1", "path": "path1" } } );
assert.deepEqual( silph( merchant_array, "2.logo" ), { "reference": "ref1", "path": "path1" } );
assert.equal( silph( merchant_array, "2.logo.reference" ), "ref1" );

console.log( "ok" );
