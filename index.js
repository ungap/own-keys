var ownKeys = function (Object) {
  try {
    return Reflect.ownKeys;
  }
  catch (IE) {
    var gOPNs = Object.getOwnPropertyNames;
    var gOPSs = Object.getOwnPropertySymbols;
    return function (object) {'use strict';
      return gOPNs(object).concat(gOPSs ? gOPSs(object) : []);
    };
  }
}(Object);
