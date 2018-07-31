function main(){
    var number1 = parseInt(prompt("What number would you like to use?"));
    var number2 = parseInt(prompt("What other number would you like to use?"));
    alert("The product is " + product(number1, number2));
    alert("The quotient is " + quotient(number1, number2));
}
function product(num1,num2) {
    return num1*num2;
}
function quotient(num1,num2){
    return num1/num2;
}
main();