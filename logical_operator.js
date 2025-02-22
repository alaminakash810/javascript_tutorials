// logical operators = used to combinr or manipulate boolean values

//                   AND = &&
//                    OR = ||
//                   NOT = !

const temp = 20;

// and operators

if(temp > 0 && temp <= 35) {
    console.log("The weather is GOOD!");
}
else {
    console.log("The weather is BAD!");
}

// or operators

if(temp <= 0 || temp >= 35) {
    console.log("The weather is BAD!");
}
else {
    console.log("The weather is GOOD!");
}

// not operators

const issunny = true;

if(!issunny) {
    console.log("The weather is Cloudy!");
}
else {
    console.log("The weather is Sunny!");
}

