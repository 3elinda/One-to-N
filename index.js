const button = document.getElementById("button");

button.addEventListener("click", function() {
    const number = prompt("Enter a number");
    numberInput(number);
})
const theResult = document.getElementById("the-result");

function numberInput(number) {
    if(number === 0) {
        return
    }
    numberInput(number -1)
    alert(number)
    // console.log(number)
}
// console.log(numberInput(3))