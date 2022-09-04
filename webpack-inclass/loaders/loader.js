module.exports = function (source) {
  Array.prototype.includes = null;
  Array.prototype.indexOf = null;
  if (!Array.prototype.includes) {
    console.log("Polyfilled Array.prototype.includes");
    Array.prototype.includes = function (search) {
      return !!~this.indexOf(search);
    };
  }
  if (!Array.prototype.indexOf) {
    console.log("Polyfilled Array.prototype.indexOf");
    Array.prototype.indexOf = (function (Object, max, min) {
      "use strict";
      return function indexOf(member, fromIndex) {
        if (this === null || this === undefined)
          throw TypeError(
            "Array.prototype.indexOf called on null or undefined"
          );

        var that = Object(this),
          Len = that.length >>> 0,
          i = min(fromIndex | 0, Len);
        if (i < 0) i = max(0, Len + i);
        else if (i >= Len) return -1;

        if (member === void 0) {
          for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i;
        } else if (member !== member) {
          for (; i !== Len; ++i) if (that[i] !== that[i]) return i;
        } else for (; i !== Len; ++i) if (that[i] === member) return i;

        return -1;
      };
    })(Object, Math.max, Math.min);
  }
  console.log(source);
  return source;
};
