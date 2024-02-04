function doSom(callback){

    callback();

}

function sayHi(){
    console.log('Cześć!');
}

function trener(grade) {
    switch (true) {
        case grade == "6":
            console.log('Brawo, dostałeś ', grade);
            break;
        case grade == "5":
            console.log('Brawo, dostałeś ', grade);
            break;
        case grade == "4":
            console.log('Brawo, dostałeś ', grade);
            break;
        default:
            console.log('Nie znam Twojej oceny')
    }
}

function getGrade(score, callback){
    let grade;
    switch (true) {
        case score >= 90:
            grade = "6";
            break;
        case score >= 80:
            grade = "5";
            break;
        case score >= 70:
            grade = "4";
            break;
        default:
            grade = 1;
    }
    callback(grade);
}

getGrade(85, trener)

function fun(){
    console.log('Sprawdzamy działanie')
}

setInterval(fun, 500);