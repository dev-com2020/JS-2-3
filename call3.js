let promise = new Promise(function (resolve,reject){
    let x = 0;
    if (x > 10){
        resolve(x);
    } else {
        reject('Za mało')
    }
});

promise.then(
    function (value){
    console.log("Sukces", value);
    },
    function (error) {
        console.log("Błąd", error)
    }
);