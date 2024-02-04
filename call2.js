function greet(fullName){
    console.log(`Witam, ${fullName[0]} ${fullName[1]}`)
}

function processCall(user,callback){
    const fullName = user.split(" ");
    callback(fullName)
}

processCall("Tomasz Kaniecki", greet);