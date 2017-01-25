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

var result1 = silph( item_object, "item.title" );

var result2 = silph( item_object, "item.name" );

var result3 = silph( item_object, "item" );

var result4 = silph( item_array, "0" );

var result5 = silph( item_array, "1" );

var result6 = silph( merchant_array, "0" );

var result7 = silph( merchant_array, "1" );

var result8 = silph( merchant_array, "2" );

var result9 = silph( merchant_array, "2.logo" );

var result10 = silph( merchant_array, "2.logo.reference" );

console.log( "result 1", result1 );

console.log( "result 2", result2 );

console.log( "result 3", result3 )

console.log( "result 4", result4 );

console.log( "result5", result5 );

console.log( "result 6", result6 );

console.log( "result 7", result7 );

console.log( "result 8", result8 );

console.log( "result 9", result9 );

console.log( "result 10", result10 );
