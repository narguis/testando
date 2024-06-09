var createCounter = function(n) {
    firstTime = true
 
    return function() {
        if (firstTime) {
            firstTime = false
            return n
        }
        
        n = n + 1
        return n
    };
};
