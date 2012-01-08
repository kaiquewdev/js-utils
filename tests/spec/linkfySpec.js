describe( 'Linkfy function', function () {
    describe( 'Generate anchor by unique attibutes', function () {
        it( 'Simple anchor', function () {
            expect(linkfy({href: 'http://www.google.com'})).toEqual('<a href="http://www.google.com">http://www.google.com</a>');    
        });

        it( 'text content anchor', function () {
            expect(linkfy({
                href: 'http://www.google.com',
                content: 'Google.com'
            })).toEqual('<a href="http://www.google.com">Google.com</a>');    
        });

        it( 'Anchor with the id', function () {
            expect(linkfy({
                href: 'http://www.google.com',
                id: 'google-anchor'
            })).toEqual('<a href="http://www.google.com" id="google-anchor">http://www.google.com</a>');    
        });

        it( 'Anchor with the class', function () {
            expect(linkfy({
                href: 'http://www.google.com',
                class: 'google-anchor-type'
            })).toEqual('<a href="http://www.google.com" class="google-anchor-type">http://www.google.com</a>');    
        });

        it( 'Anchor with the target, underscore in set', function () {
            expect(linkfy({
                href: 'http://www.google.com',
                target: '_blank'
            })).toEqual('<a href="http://www.google.com" target="_blank">http://www.google.com</a>');    
        });

        it( 'Anchor with the target, without underscore in set', function () {
            expect(linkfy({
                href: 'http://www.google.com',
                target: 'blank'
            })).toEqual('<a href="http://www.google.com" target="_blank">http://www.google.com</a>');    
        });

        it( 'Anchor with the rel', function () {
            expect(linkfy({
                href: 'http://www.google.com',
                rel: 'external'
            })).toEqual('<a href="http://www.google.com" rel="external">http://www.google.com</a>');    
        });
    });

    describe('Mix the attributes', function () {
        it( 'Anchor content, more id', function () {
            expect(linkfy({
                href: 'http://google.com',
                content: 'Google.com',
                id: 'google-anchor'
            })).toEqual('<a href="http://google.com" id="google-anchor">Google.com</a>');
        });

        it( 'Anchor content, more id and class', function () {
            expect(linkfy({
                href: 'http://google.com',
                content: 'Google.com',
                id: 'google-anchor',
                class: 'google-anchor-color'
            })).toEqual('<a href="http://google.com" id="google-anchor" class="google-anchor-color">Google.com</a>');
        });

        it( 'Anchor content, more id, class and target', function () {
            expect(linkfy({
                href: 'http://google.com',
                content: 'Google.com',
                id: 'google-anchor',
                class: 'google-anchor-color',
                target: 'self'
            })).toEqual('<a href="http://google.com" id="google-anchor" class="google-anchor-color" target="_self">Google.com</a>');
        });

        it( 'Anchor content, more id, class, target and rel', function () {
            expect(linkfy({
                href: 'http://google.com',
                content: 'Google.com',
                id: 'google-anchor',
                class: 'google-anchor-color',
                target: 'self',
                rel: 'internal'
            })).toEqual('<a href="http://google.com" id="google-anchor" class="google-anchor-color" target="_self" rel="internal">Google.com</a>');
        });
    });
});
