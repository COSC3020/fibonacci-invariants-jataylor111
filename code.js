function fib(n, a = 0, b = 1) {

    if (n == 0) {
        return [a];
    } else {
        var fibValues = fib(n - 1, b, a + b);
        fibValues.unshift(a);
        return fibValues;
    }
    
}
