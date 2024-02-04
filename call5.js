const promise = new Promise((resolve,reject) => {
    reject("opps!");
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