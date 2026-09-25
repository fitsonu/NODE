// function add(a,b){
//   return a+b;
// }
// function sub(a,b){
//   return a-b;
// }

//module.exports= add;
//module.exports=sub; // it will do overwrite to upper function

// module.exports ={
//   addFn: add, //we can pass as key:value Or
//    sub      // we can pass direct fun
// // }


// //when we have to use directly
// module.exports={
//   add,
//   sub,
// }


// Anonyms function
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;

