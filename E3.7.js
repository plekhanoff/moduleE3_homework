let num = 5;

let sum = function() {
    num = num + 1;
    console.log(num);
}

const intervalId = setInterval(sum, 1000);

setTimeout(function() {
    clearInterval(intervalId);
}, 15000);