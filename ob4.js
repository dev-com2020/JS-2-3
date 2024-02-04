const allowes = ["1234", "pass", "admin"];

function passwordChecker(pass) {
    return allowes.includes(pass);
}

function login(password) {
    return new Promise((resolve, reject) => {
        if (passwordChecker(password)) {
            resolve({
                status: true
            });
        } else {
            reject(
                { status: false }
            )
        }
    });
}

function checker(pass) {
    login(pass)
        .then(token => {
            console.log("Zatwierdzam!");
            console.log(token);
        })
        .catch(value => {
            console.log("Odrzucamy!");
            console.log(value);
        })
}

checker("12345");