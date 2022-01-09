

// function makeLine(length) {
  
//   for (let i = 1; i = 3; i++){
//     var line = "";
//   for (var j = 1; j <= length; j++) {
//       line += "* " ;
//   }
  
// }
// }

// your code goes here.  Make sure you call makeLine() in your own code.

// const buildTriangle = function(param1) {
//    return makeLine(param1);
// }

// console.log(buildTriangle(10));

// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//       let step = ' ';

//    for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         step += '#'
//      } else {
//         step += ' ';
//      }
//    }
//    console.log(step)
//   }
// }

// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//       let step = ' ';

//    for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         step += '#'
//      } else {
//         step += ' ';
//      }
//    }
//    console.log(step)
//   }
// }

function makeLine(length) {
  
  for (let i = 0; i <= length; i++){
    let line = " ";
  for (let j = 1; j <= length; j++) {
      if (j <= i) {
     line += "* ";
  } else {
      line += " ";
  }
  
}
console.log(line);

}

}

const buildTriangle = function(param1) {
  return makeLine(param1);
}

console.log(buildTriangle(10));