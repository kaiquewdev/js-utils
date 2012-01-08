describe( 'Linkfy function', function () {
    describe( 'Generate anchor', function () {
        it( 'simple length', function () {
            expect(linkfy({href: 'http://www.google.com'})).toEqual('<a href="http://www.google.com"> http://www.google.com </a>');    
        });

        it( 'with text content', function () {
            expect(linkfy({href: 'http://www.google.com', content: 'Google'})).toEqual('<a href="http://www.google.com"> Google </a>');    
        });

        it( 'with target without underscore', function () {
            expect(linkfy({
                href: 'http://www.google.com', 
                content: 'Google',
                target: 'blank'})).toEqual('<a href="http://www.google.com" target="_blank"> Google </a>');    
        });
        
        it( 'with target prefix underscore', function () {
            expect(linkfy({
                href: 'http://www.google.com', 
                content: 'Google',
                target: '_blank'})).toEqual('<a href="http://www.google.com" target="_blank"> Google </a>');    
        });
        
        it( 'with rel', function () {
            expect(linkfy({
                href: 'http://www.google.com', 
                content: 'Google',
                target: '_blank',
                rel: 'hello-linkfy'})).toEqual('<a href="http://www.google.com" target="_blank" rel="hello-linkfy"> Google </a>');    
        });
        
        it( 'type of return link', function () {
            expect(typeof linkfy({
                href: 'http://www.google.com', 
                content: 'Google',
                target: '_blank',
                rel: 'hello-linkfy'})).toEqual('string');    
        });
    });
});
