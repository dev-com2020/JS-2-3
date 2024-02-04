function say(x) {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("coś.." + x);
        }, 2000);
    });
}

async function talk(x) {
    const words = await say(x);
    console.log(words);
}


talk(1234);
talk(123);
talk(12);
talk(1);