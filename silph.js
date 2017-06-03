"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "silph",
			"path": "silph/silph.js",
			"file": "silph.js",
			"module": "silph",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/silph.git",``
			"test": "silph-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Look through shallow objects.

		Do not mix in one token, paths containing dot reference and variable arguments.
	@end-module-documentation

	@include:
		{
			"loosen": "loosen",
			"optall": "optall",
			"plough": "plough",
			"protype": "protype",
			"shft": "shft",
			"U200b": "u200b"
		}
	@end-include
*/

const loosen = require( "loosen" );
const optall = require( "optall" );
const plough = require( "plough" );
const protype = require( "protype" );
const shft = require( "shft" );
const truly = require( "truly" );
const U200b = require( "u200b" );

const silph = function silph( entity, path ){
	/*;
		@meta-configuration:
			{
				"entity:required": [
					"object",
					Array
				],
				"path:required": [
					"string",
					"..."
				]
			}
		@end-meta-configuration
	*/

	if( !protype( entity, OBJECT ) ){
		throw new Error( "invalid entity" );
	}

	let data = loosen( entity );

	path = optall( plough( shft( arguments )
		.filter( truly )
		.filter( ( token ) => { return protype( token, STRING ); } )
		.map( function onEachToken( token ){
			if( ( /\.{3}/ ).test( token ) ){
				return U200b( token.split( /\.{3}/g ) ).join( "..." ).toString( );
			}

			return token.split( "." );
		} ) ), STRING );

	if( path.length == 0 ){
		return entity;
	}

	path = U200b( path ).join( "." ).toString( );

	return data[ path ];
};

module.exports = silph;
