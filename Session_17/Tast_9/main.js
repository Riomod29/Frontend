let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter another number: "));
let c = parseInt(prompt("Enter another number: "));

let denta = b*b - 4*a*c;
if (denta < 0) {
    console.log("No solution");
} else if (denta == 0) {
    console.log("x = " + (-b/(2*a)));
} else {
    console.log("x1 = " + ((-b + Math.sqrt(denta))/(2*a)));
    console.log("x2 = " + ((-b - Math.sqrt(denta))/(2*a)));
}
