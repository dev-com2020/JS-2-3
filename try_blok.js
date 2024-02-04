// try {
//     // kod który może powodować błąd
// } catch (error){
//     // w przypadku błędu
// } finally {
//     // zawsze wykonuje się ten kod
// }


function checkNo(num) {
    if (isNaN(num)){
        throw new Error('Argument musi być liczbą!')
    }
    return num;
}

try {
    const result = checkNo('to jest liczba');
} catch (error){
    console.log(error);
} finally {
    console.log('Dziękuję za używanie mojego programu!');
}
