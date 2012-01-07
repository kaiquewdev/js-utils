describe( 'Length function', function () {
    describe( 'length of string, array and number', function () {
        it( 'string length', function () {
            expect(len('television')).toEqual(10);    
        });

        it( 'array length', function () {
            expect(len(['a', 'b', 'c', [4]])).toEqual(4);    
        });

        it( 'number length', function () {
            expect(len(1000)).toEqual(4);    
        });
    });

    describe( 'length type return', function () {
        it( 'function return', function () {
            expect(typeof len(1000)).toEqual('number');    
        });
    });
});
