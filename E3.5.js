function funk(a) {
    return function(b){
        console.log(a + b);
        return a + b;
    }
}

const result = funk(2);
let b = 22;
result(b);