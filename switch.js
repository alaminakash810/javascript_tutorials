// SWITCH = can be an efficient replacement to many if else statements
// use break to break out of the switch

let day = "sun";

switch(day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thrusday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break; 
    default:
        console.log(`${day} is not a day`);       
}

let score = 33;
let lettergrade;

switch(true) {
    case score >= 90:
        lettergrade = "A";
        break;
    case score >= 80:
        lettergrade = "B";
        break;
    case score >= 70:
        lettergrade = "C";
        break;
    case score >= 60:
        lettergrade = "D";
        break;
    case score < 60:
        lettergrade = "F";
        break;
}

console.log(lettergrade);
