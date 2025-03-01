// variable scope = where a variable is recognized accessible (local and global)

let x =3; //global variable

func2();
func1();

function func1() {
    //let x = 1; // local variable
    console.log(x);
}
function func2() {
    //let x = 2;  // local variable
    console.log(x);
}

// if the same variable is used in both local and global then the function will 
// return the value of the variable inside the local scope

