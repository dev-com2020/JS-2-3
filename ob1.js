const myPromise = new Promise((resolve,reject) => {
    resolve("Start licznika");
});

function counter(val){
    console.log(val);
}

// myPromise.then(
//     function numbers(value){
//         console.log(value);
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//       }}
// );

myPromise
    .then(value => {counter(value); return 1})
    .then(value => {counter(value); return 2})
    .then(value => {counter(value); return 3})
    .then(value => {counter(value);});