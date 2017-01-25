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
			"budge": "budge",
			"loosen": "loosen",
			"optall": "optall",
			"plough": "plough",
			"protype": "protype",
			"U200b": "u200b"
		}
	@end-include
*/

var budge = require("budge");
var loosen = require("loosen");
var optall = require("optall");
var plough = require("plough");
var protype = require("protype");
var truly = require("truly");
var U200b = require("u200b");

var silph = function silph(entity, path) {
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

	if (!protype(entity, OBJECT)) {
		throw new Error("invalid entity");
	}

	var data = loosen(entity);

	path = optall(plough(budge(arguments).filter(truly).filter(function (token) {
		return protype(token, STRING);
	}).map(function onEachToken(token) {
		if (/\.{3}/.test(token)) {
			return U200b(token.split(/\.{3}/g)).join("...").toString();
		}

		return token.split(".");
	})), STRING);

	if (path.length == 0) {
		return entity;
	}

	path = U200b(path).join(".").toString();

	return data[path];
};

module.exports = silph;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbHBoLmpzIl0sIm5hbWVzIjpbImJ1ZGdlIiwicmVxdWlyZSIsImxvb3NlbiIsIm9wdGFsbCIsInBsb3VnaCIsInByb3R5cGUiLCJ0cnVseSIsIlUyMDBiIiwic2lscGgiLCJlbnRpdHkiLCJwYXRoIiwiT0JKRUNUIiwiRXJyb3IiLCJkYXRhIiwiYXJndW1lbnRzIiwiZmlsdGVyIiwidG9rZW4iLCJTVFJJTkciLCJtYXAiLCJvbkVhY2hUb2tlbiIsInRlc3QiLCJzcGxpdCIsImpvaW4iLCJ0b1N0cmluZyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFVBQVVKLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1LLFFBQVFMLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTU0sUUFBUU4sUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTU8sUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFDM0M7Ozs7Ozs7Ozs7Ozs7OztBQWVBLEtBQUksQ0FBQ0wsUUFBU0ksTUFBVCxFQUFpQkUsTUFBakIsQ0FBTCxFQUFnQztBQUMvQixRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT1gsT0FBUU8sTUFBUixDQUFYOztBQUVBQyxRQUFPUCxPQUFRQyxPQUFRSixNQUFPYyxTQUFQLEVBQ3JCQyxNQURxQixDQUNiVCxLQURhLEVBRXJCUyxNQUZxQixDQUViLFVBQUVDLEtBQUYsRUFBYTtBQUFFLFNBQU9YLFFBQVNXLEtBQVQsRUFBZ0JDLE1BQWhCLENBQVA7QUFBa0MsRUFGcEMsRUFHckJDLEdBSHFCLENBR2hCLFNBQVNDLFdBQVQsQ0FBc0JILEtBQXRCLEVBQTZCO0FBQ2xDLE1BQU0sT0FBRixDQUFZSSxJQUFaLENBQWtCSixLQUFsQixDQUFKLEVBQStCO0FBQzlCLFVBQU9ULE1BQU9TLE1BQU1LLEtBQU4sQ0FBYSxRQUFiLENBQVAsRUFBaUNDLElBQWpDLENBQXVDLEtBQXZDLEVBQStDQyxRQUEvQyxFQUFQO0FBQ0E7O0FBRUQsU0FBT1AsTUFBTUssS0FBTixDQUFhLEdBQWIsQ0FBUDtBQUNBLEVBVHFCLENBQVIsQ0FBUixFQVNDSixNQVRELENBQVA7O0FBV0EsS0FBSVAsS0FBS2MsTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3JCLFNBQU9mLE1BQVA7QUFDQTs7QUFFREMsUUFBT0gsTUFBT0csSUFBUCxFQUFjWSxJQUFkLENBQW9CLEdBQXBCLEVBQTBCQyxRQUExQixFQUFQOztBQUVBLFFBQU9WLEtBQU1ILElBQU4sQ0FBUDtBQUNBLENBeENEOztBQTBDQWUsT0FBT0MsT0FBUCxHQUFpQmxCLEtBQWpCIiwiZmlsZSI6InNpbHBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzaWxwaFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwic2lscGgvc2lscGguanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInNpbHBoLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInNpbHBoXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc2lscGguZ2l0XCIsYGBcblx0XHRcdFwidGVzdFwiOiBcInNpbHBoLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TG9vayB0aHJvdWdoIHNoYWxsb3cgb2JqZWN0cy5cblxuXHRcdERvIG5vdCBtaXggaW4gb25lIHRva2VuLCBwYXRocyBjb250YWluaW5nIGRvdCByZWZlcmVuY2UgYW5kIHZhcmlhYmxlIGFyZ3VtZW50cy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJsb29zZW5cIjogXCJsb29zZW5cIixcblx0XHRcdFwib3B0YWxsXCI6IFwib3B0YWxsXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJVMjAwYlwiOiBcInUyMDBiXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGxvb3NlbiA9IHJlcXVpcmUoIFwibG9vc2VuXCIgKTtcbmNvbnN0IG9wdGFsbCA9IHJlcXVpcmUoIFwib3B0YWxsXCIgKTtcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IFUyMDBiID0gcmVxdWlyZSggXCJ1MjAwYlwiICk7XG5cbmNvbnN0IHNpbHBoID0gZnVuY3Rpb24gc2lscGgoIGVudGl0eSwgcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRBcnJheVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGVudGl0eSwgT0JKRUNUICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHR9XG5cblx0bGV0IGRhdGEgPSBsb29zZW4oIGVudGl0eSApO1xuXG5cdHBhdGggPSBvcHRhbGwoIHBsb3VnaCggYnVkZ2UoIGFyZ3VtZW50cyApXG5cdFx0LmZpbHRlciggdHJ1bHkgKVxuXHRcdC5maWx0ZXIoICggdG9rZW4gKSA9PiB7IHJldHVybiBwcm90eXBlKCB0b2tlbiwgU1RSSU5HICk7IH0gKVxuXHRcdC5tYXAoIGZ1bmN0aW9uIG9uRWFjaFRva2VuKCB0b2tlbiApe1xuXHRcdFx0aWYoICggL1xcLnszfS8gKS50ZXN0KCB0b2tlbiApICl7XG5cdFx0XHRcdHJldHVybiBVMjAwYiggdG9rZW4uc3BsaXQoIC9cXC57M30vZyApICkuam9pbiggXCIuLi5cIiApLnRvU3RyaW5nKCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdG9rZW4uc3BsaXQoIFwiLlwiICk7XG5cdFx0fSApICksIFNUUklORyApO1xuXG5cdGlmKCBwYXRoLmxlbmd0aCA9PSAwICl7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdHBhdGggPSBVMjAwYiggcGF0aCApLmpvaW4oIFwiLlwiICkudG9TdHJpbmcoICk7XG5cblx0cmV0dXJuIGRhdGFbIHBhdGggXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2lscGg7XG4iXX0=
