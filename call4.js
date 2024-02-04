const promise = new Promise((resolve,reject) => {
    resolve("sukces!");
}).then(value => {
    console.log(value);
    return 'Rozumiem'
})
.then(value => {
    console.log(value);
    return 'działanie'
})
.then(value => {
    console.log(value);
    return 'promisów.'
})
.then(value => {
    console.log(value);
})