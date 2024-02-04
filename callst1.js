// console.log("Cześć");
// setTimeout(() => console.log("Jestem spóźniony"),1000);
// console.log(add(4,5));
// function add(x,y){
//     return x + y;
// }



// function addOne(val){
//     return val + 1;
//   }
// function total(a, b, callback){
//     const sum = a + b;
//     return callback(sum);
//   }
// console.log(total(4, 5, addOne));
  
function checker(val) {
    return new Promise((resolve, reject) => {
      if (val >= 5) {
        resolve("Ready");
      } else {
        reject(new Error("Oh no"));
      }
    });
  }
  checker(5)
    .then((data) => {console.log(data); })
    .catch((err) => {console.error(err); });
  