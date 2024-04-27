function myFunction() {

    var num = document.getElementById("text_a").value;

    if (num < 0){
        document.getElementById("answer").innerText = "The number is negative";
    }
    else if (num > 0){
        document.getElementById("answer").innerText = "The number is positive";
    }
    else if (num == 0){
        document.getElementById("answer").innerText = "Zero doesn't count!";
    }
    else {
        document.getElementById("answer").innerText = "The said input is not a number!";
    }
}