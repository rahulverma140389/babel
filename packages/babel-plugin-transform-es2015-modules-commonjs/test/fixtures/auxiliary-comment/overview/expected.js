/*before*/"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = undefined;
/*after*/
/*before*/require("foo"); /*after*/

/*before*/require("foo-bar"); /*after*/

/*before*/require("./directory/foo-bar"); /*after*/

var /*before*/_foo = babelHelpers.interopRequireDefault(require("foo2")) /*after*/;

var /*before*/_foo2 = require("foo3") /*after*/;

/*before*/var /*after*/foo2 = babelHelpers.interopRequireWildcard(_foo2);

var /*before*/_foo3 = require("foo4") /*after*/;

var /*before*/_foo4 = require("foo5") /*after*/;

/*before*/exports. /*after*/test = test;
var test = /*before*/exports. /*after*/test = 5;

/*before*/(0, _foo3.bar) /*after*/( /*before*/_foo.default /*after*/, /*before*/_foo4.foo /*after*/);

/* my comment */
/*before*/_foo4.foo; /*after*/
/*before*/_foo.default; /*after*/