"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/silph.git",``
			"test": "silph-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Look through shallow objects.
	@end-module-documentation

	@include:
		{
			"budge": "budge",
			"loosen": "loosen",
			"plough": "plough",
			"optall": "optall",
			"U200b": "u200b"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var budge = require( "budge" );
	var loosen = require( "loosen" );
	var plough = require( "plough" );
	var optall = require( "optall" );
	var U200b = require( "u200b" );
}

if( typeof window != "undefined" &&
	!( "budge" in window ) )
{
	throw new Error( "budge is not defined" );
}

if( typeof window != "undefined" &&
	!( "loosen" in window ) )
{
	throw new Error( "loosen is not defined" );
}

if( typeof window != "undefined" &&
	!( "plough" in window ) )
{
	throw new Error( "plough is not defined" );
}

if( typeof window != "undefined" &&
	!( "optall" in window ) )
{
	throw new Error( "optall is not defined" );
}

if( typeof window != "undefined" &&
	!( "U200b" in window ) )
{
	throw new Error( "U200b is not defined" );
}

var silph = function silph( entity, path ){
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

	var data = loosen( entity );

	path = optall( plough( budge( arguments )
		.map( function onEachToken( token ){
			return token.split( "." );
		} ) ), STRING );

	if( path.length == 0 ){
		return entity;
	}

	path = U200b( path ).join( "." ).toString( );

	return data[ path ];
};

if( typeof module != "undefined" ){
	module.exports = silph;
}
