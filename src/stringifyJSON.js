// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = [];
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return '' + obj;
  } if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } if (obj === null) {
    return 'null';
  } if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  } if (typeof obj === 'object') {
    var stringObj = [];
    for (key in obj) {
      var stringKey = stringifyJSON(key);
      var stringVal = stringifyJSON(obj[key]);
      stringObj.push(stringKey + ':' + stringVal);
    }
    return '{' + stringObj.join(',') + '}';
  }
};



//number - 'number' =
//string
//boolean - 'true' or 'false' =
//array - '[' + array + ']'
//object - '{' + result + '}'
//function - ignore
//null - 'null'
//undefined - ignore