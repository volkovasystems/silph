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
			"plough": "plough",
			"optall": "optall",
			"U200b": "u200b"
		}
	@end-include
*/

var budge = require("budge");
var loosen = require("loosen");
var optall = require("optall");
var plough = require("plough");
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

	var data = loosen(entity);

	path = optall(plough(budge(arguments).map(function onEachToken(token) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbHBoLmpzIl0sIm5hbWVzIjpbImJ1ZGdlIiwicmVxdWlyZSIsImxvb3NlbiIsIm9wdGFsbCIsInBsb3VnaCIsIlUyMDBiIiwic2lscGgiLCJlbnRpdHkiLCJwYXRoIiwiZGF0YSIsImFyZ3VtZW50cyIsIm1hcCIsIm9uRWFjaFRva2VuIiwidG9rZW4iLCJ0ZXN0Iiwic3BsaXQiLCJqb2luIiwidG9TdHJpbmciLCJTVFJJTkciLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1LLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLElBQXhCLEVBQThCO0FBQzNDOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxLQUFJQyxPQUFPUCxPQUFRSyxNQUFSLENBQVg7O0FBRUFDLFFBQU9MLE9BQVFDLE9BQVFKLE1BQU9VLFNBQVAsRUFDckJDLEdBRHFCLENBQ2hCLFNBQVNDLFdBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ2xDLE1BQU0sT0FBRixDQUFZQyxJQUFaLENBQWtCRCxLQUFsQixDQUFKLEVBQStCO0FBQzlCLFVBQU9SLE1BQU9RLE1BQU1FLEtBQU4sQ0FBYSxRQUFiLENBQVAsRUFBaUNDLElBQWpDLENBQXVDLEtBQXZDLEVBQStDQyxRQUEvQyxFQUFQO0FBQ0E7O0FBRUQsU0FBT0osTUFBTUUsS0FBTixDQUFhLEdBQWIsQ0FBUDtBQUNBLEVBUHFCLENBQVIsQ0FBUixFQU9DRyxNQVBELENBQVA7O0FBU0EsS0FBSVYsS0FBS1csTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3JCLFNBQU9aLE1BQVA7QUFDQTs7QUFFREMsUUFBT0gsTUFBT0csSUFBUCxFQUFjUSxJQUFkLENBQW9CLEdBQXBCLEVBQTBCQyxRQUExQixFQUFQOztBQUVBLFFBQU9SLEtBQU1ELElBQU4sQ0FBUDtBQUNBLENBbENEOztBQW9DQVksT0FBT0MsT0FBUCxHQUFpQmYsS0FBakIiLCJmaWxlIjoic2lscGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInNpbHBoXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzaWxwaC9zaWxwaC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwic2lscGguanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwic2lscGhcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zaWxwaC5naXRcIixgYFxuXHRcdFx0XCJ0ZXN0XCI6IFwic2lscGgtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRMb29rIHRocm91Z2ggc2hhbGxvdyBvYmplY3RzLlxuXG5cdFx0RG8gbm90IG1peCBpbiBvbmUgdG9rZW4sIHBhdGhzIGNvbnRhaW5pbmcgZG90IHJlZmVyZW5jZSBhbmQgdmFyaWFibGUgYXJndW1lbnRzLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImxvb3NlblwiOiBcImxvb3NlblwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwib3B0YWxsXCI6IFwib3B0YWxsXCIsXG5cdFx0XHRcIlUyMDBiXCI6IFwidTIwMGJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgbG9vc2VuID0gcmVxdWlyZSggXCJsb29zZW5cIiApO1xuY29uc3Qgb3B0YWxsID0gcmVxdWlyZSggXCJvcHRhbGxcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgVTIwMGIgPSByZXF1aXJlKCBcInUyMDBiXCIgKTtcblxuY29uc3Qgc2lscGggPSBmdW5jdGlvbiBzaWxwaCggZW50aXR5LCBwYXRoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdEFycmF5XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicGF0aDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBkYXRhID0gbG9vc2VuKCBlbnRpdHkgKTtcblxuXHRwYXRoID0gb3B0YWxsKCBwbG91Z2goIGJ1ZGdlKCBhcmd1bWVudHMgKVxuXHRcdC5tYXAoIGZ1bmN0aW9uIG9uRWFjaFRva2VuKCB0b2tlbiApe1xuXHRcdFx0aWYoICggL1xcLnszfS8gKS50ZXN0KCB0b2tlbiApICl7XG5cdFx0XHRcdHJldHVybiBVMjAwYiggdG9rZW4uc3BsaXQoIC9cXC57M30vZyApICkuam9pbiggXCIuLi5cIiApLnRvU3RyaW5nKCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdG9rZW4uc3BsaXQoIFwiLlwiICk7XG5cdFx0fSApICksIFNUUklORyApO1xuXG5cdGlmKCBwYXRoLmxlbmd0aCA9PSAwICl7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdHBhdGggPSBVMjAwYiggcGF0aCApLmpvaW4oIFwiLlwiICkudG9TdHJpbmcoICk7XG5cblx0cmV0dXJuIGRhdGFbIHBhdGggXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2lscGg7XG4iXX0=
