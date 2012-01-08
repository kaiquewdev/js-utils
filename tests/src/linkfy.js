function len( input ) { 
    var count = 0;

    input = (function () { return ( typeof input === 'number' ) && input.toString() ||  input; } ()); 
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

String.prototype.deal = function() {
    
    var content = this,
    n = 0,
    args = Array.prototype.slice.call(arguments);

    for (var i in args) {
        if (content.search(/\{+[0-9]+\}/) > -1) {
            content = content.replace('\{' + i + '\}', args[i])
        } if (content.search(/\{[0-9][:][e][0-9]\}/) !== -1) {
            n = content.match(/\{[0-9][:][e][0-9]\}/)
            n = n[0].replace('\{'+i+':e','')
            n = n.replace('\}','')
            n = parseInt(n)

            if (content.search('\{'+i+':e'+n+'\}') !== -1) {
                args[i] = parseFloat(args[i])
                args[i] = args[i].toFixed(n)
                content = content.replace(/\{[0-9][:][e][0-9]\}/, args[i])
            }
        }
    }

    return content;
}

function linkfy ( att ) {
    // Create a link tag
    att = att || false;
    att['content'] = att['content'] || false;
    att['title'] = att['title'] || false;
    att['rel'] = att['rel'] || false;
    att['class'] = att['class'] || false;
    att['id'] = att['id'] || false;
    att['href'] = att['href'] || false;

    if ( att ) {
        if ( att['href'] ) {
            att['content'] = att['content'] || att['href'];

            if ( att['target'] ) {
                att['target'] = ( att['target'].indexOf('_') === 0 ) && att['target'] || '{0}{1}'.deal('_', att['target']);

                return '<a href=\"{0}\" target=\"{1}\"> {2} </a>'.deal(att['href'], att['target'], att['content']);   
            } else {
                return '<a href=\"{0}\"> {1} </a>'.deal(att['href'], att['content']);
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

(function () {
    console.log( linkfy( {content: 'Google', href: 'http://www.google.com'}) );
    console.log( linkfy( {href: 'http://www.google.com'}) );
    console.log( linkfy( {href: 'http://www.google.com', content: 'Google', target: 'blank'}) );
    console.log( linkfy( {href: 'http://www.google.com', content: 'Google', target: '_blank'}) );
    console.log( linkfy( {content: 'Other test'}) );
} ());