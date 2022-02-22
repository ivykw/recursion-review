// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
//   var result = [];
//   // declare a new function
//   var classCheck = function(className, element) {
//     // if element.classList = className
//     if (element.classList.indexOf(className) !== -1) {
//       // add to result array
//       result.push(element);
//     }
//     //recursive case
//     if (element.hasChildNodes()) {
//       for (var i = 0; i < element.childNodes.length; i++) {
//         result.push(classCheck(className, element.childNodes[i]));
//       }
//     // check child nodes
//     // if they exist
//     //run recursive case on childnodes
//     }
//   };
//   classCheck(className, document.body);
//   return result;





//   // return result array
// };


// use document.body
// use .classList
// use .childNodes


var getElementsByClassName = function(className) {
  var result = [];
  var bod = document.body;
  var classCheck = function(bod) {
    if (bod.classList && bod.classList.contains(className)) {
      result.push(bod);
    }
    if (bod.hasChildNodes()) {
      for (var i = 0; i < bod.childNodes.length; i++) {
        classCheck(bod.childNodes[i]);
      }
    }
  };
  classCheck(bod);
  return result;
};
