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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"shft": "shft",
              			"U200b": "u200b"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var loosen = require("loosen");
var optall = require("optall");
var plough = require("plough");
var shft = require("shft");
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

	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object") {
		throw new Error("invalid entity");
	}

	var data = loosen(entity);

	path = optall(plough(shft(arguments).
	filter(truly).
	filter(function (token) {return typeof token == "string";}).
	map(function onEachToken(token) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbHBoLnN1cHBvcnQuanMiXSwibmFtZXMiOlsibG9vc2VuIiwicmVxdWlyZSIsIm9wdGFsbCIsInBsb3VnaCIsInNoZnQiLCJ0cnVseSIsIlUyMDBiIiwic2lscGgiLCJlbnRpdHkiLCJwYXRoIiwiRXJyb3IiLCJkYXRhIiwiYXJndW1lbnRzIiwiZmlsdGVyIiwidG9rZW4iLCJtYXAiLCJvbkVhY2hUb2tlbiIsInRlc3QiLCJzcGxpdCIsImpvaW4iLCJ0b1N0cmluZyIsIlNUUklORyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxPQUFPSCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssUUFBUUwsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTU0sUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFDM0M7Ozs7Ozs7Ozs7Ozs7OztBQWVBLEtBQUksUUFBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QixRQUFNLElBQUlFLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT1gsT0FBUVEsTUFBUixDQUFYOztBQUVBQyxRQUFPUCxPQUFRQyxPQUFRQyxLQUFNUSxTQUFOO0FBQ3JCQyxPQURxQixDQUNiUixLQURhO0FBRXJCUSxPQUZxQixDQUViLFVBQUVDLEtBQUYsRUFBYSxDQUFFLE9BQU8sT0FBT0EsS0FBUCxJQUFnQixRQUF2QixDQUFrQyxDQUZwQztBQUdyQkMsSUFIcUIsQ0FHaEIsU0FBU0MsV0FBVCxDQUFzQkYsS0FBdEIsRUFBNkI7QUFDbEMsTUFBTSxPQUFGLENBQVlHLElBQVosQ0FBa0JILEtBQWxCLENBQUosRUFBK0I7QUFDOUIsVUFBT1IsTUFBT1EsTUFBTUksS0FBTixDQUFhLFFBQWIsQ0FBUCxFQUFpQ0MsSUFBakMsQ0FBdUMsS0FBdkMsRUFBK0NDLFFBQS9DLEVBQVA7QUFDQTs7QUFFRCxTQUFPTixNQUFNSSxLQUFOLENBQWEsR0FBYixDQUFQO0FBQ0EsRUFUcUIsQ0FBUixDQUFSLEVBU0NHLE1BVEQsQ0FBUDs7QUFXQSxLQUFJWixLQUFLYSxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDckIsU0FBT2QsTUFBUDtBQUNBOztBQUVEQyxRQUFPSCxNQUFPRyxJQUFQLEVBQWNVLElBQWQsQ0FBb0IsR0FBcEIsRUFBMEJDLFFBQTFCLEVBQVA7O0FBRUEsUUFBT1QsS0FBTUYsSUFBTixDQUFQO0FBQ0EsQ0F4Q0Q7O0FBMENBYyxPQUFPQyxPQUFQLEdBQWlCakIsS0FBakIiLCJmaWxlIjoic2lscGguc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJzaWxwaFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJzaWxwaC9zaWxwaC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJzaWxwaC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInNpbHBoXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3NpbHBoLmdpdFwiLGBgXHJcblx0XHRcdFwidGVzdFwiOiBcInNpbHBoLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0TG9vayB0aHJvdWdoIHNoYWxsb3cgb2JqZWN0cy5cclxuXHJcblx0XHREbyBub3QgbWl4IGluIG9uZSB0b2tlbiwgcGF0aHMgY29udGFpbmluZyBkb3QgcmVmZXJlbmNlIGFuZCB2YXJpYWJsZSBhcmd1bWVudHMuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJsb29zZW5cIjogXCJsb29zZW5cIixcclxuXHRcdFx0XCJvcHRhbGxcIjogXCJvcHRhbGxcIixcclxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcIlUyMDBiXCI6IFwidTIwMGJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgbG9vc2VuID0gcmVxdWlyZSggXCJsb29zZW5cIiApO1xyXG5jb25zdCBvcHRhbGwgPSByZXF1aXJlKCBcIm9wdGFsbFwiICk7XHJcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcclxuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcbmNvbnN0IFUyMDBiID0gcmVxdWlyZSggXCJ1MjAwYlwiICk7XHJcblxyXG5jb25zdCBzaWxwaCA9IGZ1bmN0aW9uIHNpbHBoKCBlbnRpdHksIHBhdGggKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0QXJyYXlcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwicGF0aDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggdHlwZW9mIGVudGl0eSAhPSBcIm9iamVjdFwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHJcblx0bGV0IGRhdGEgPSBsb29zZW4oIGVudGl0eSApO1xyXG5cclxuXHRwYXRoID0gb3B0YWxsKCBwbG91Z2goIHNoZnQoIGFyZ3VtZW50cyApXHJcblx0XHQuZmlsdGVyKCB0cnVseSApXHJcblx0XHQuZmlsdGVyKCAoIHRva2VuICkgPT4geyByZXR1cm4gdHlwZW9mIHRva2VuID09IFwic3RyaW5nXCI7IH0gKVxyXG5cdFx0Lm1hcCggZnVuY3Rpb24gb25FYWNoVG9rZW4oIHRva2VuICl7XHJcblx0XHRcdGlmKCAoIC9cXC57M30vICkudGVzdCggdG9rZW4gKSApe1xyXG5cdFx0XHRcdHJldHVybiBVMjAwYiggdG9rZW4uc3BsaXQoIC9cXC57M30vZyApICkuam9pbiggXCIuLi5cIiApLnRvU3RyaW5nKCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdG9rZW4uc3BsaXQoIFwiLlwiICk7XHJcblx0XHR9ICkgKSwgU1RSSU5HICk7XHJcblxyXG5cdGlmKCBwYXRoLmxlbmd0aCA9PSAwICl7XHJcblx0XHRyZXR1cm4gZW50aXR5O1xyXG5cdH1cclxuXHJcblx0cGF0aCA9IFUyMDBiKCBwYXRoICkuam9pbiggXCIuXCIgKS50b1N0cmluZyggKTtcclxuXHJcblx0cmV0dXJuIGRhdGFbIHBhdGggXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2lscGg7XHJcbiJdfQ==
//# sourceMappingURL=silph.support.js.map
