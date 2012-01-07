// len(); implementation for calculate the length
function len( input ) {
    var count = 0;

    input = input && Array.prototype.slice.call(input) || false;

    if ( input ) {
        while ( input ) {
            if ( input[count] !== undefined ) {
                count++;
            } else {
                break;    
            }
        }

        return count;
    } else {
        return count;    
    }
}

(function () {
    console.log(len(''));    
    console.log(len('my road'));    
    console.log(len([1, 2, 3]));    
    console.log(len([1, 2, 3, [4]]));    
    console.log(typeof len('test'));    
} ());
