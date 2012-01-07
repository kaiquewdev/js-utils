// len(); implementation for calculate the length
function len( input ) {
    var count = 0;

    input = (function () { return ( typeof input === 'number' ) && input.toString() || input; } ());
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
