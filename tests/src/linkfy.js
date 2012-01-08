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
    att['href'] = att['href'] || false;
    att['content'] = att['content'] || false;
    att['id'] = att['id'] || false;
    att['class'] = att['class'] || false;
    att['target'] = att['target'] || false;
    att['rel'] = att['rel'] || false;

    if ( att ) {
     var insertAtt,
         content;
     
     if ( att['href'] ) {
         insertAtt = 'href=\"{0}\"'.deal( att['href'] );
         content = att['href'];

         if ( att['content'] ) {
             content = att['content'];
         } if ( att['id'] ) {
            insertAtt += ' id=\"{0}\"'.deal( att['id'] );
         } if ( att['class'] ) {
            insertAtt += ' class=\"{0}\"'.deal( att['class'] ) 
         } if ( att['target'] ) {
            att['target'] = ( att['target'].indexOf('_') === 0 ) &&
                            att['target'] || '_{0}'.deal( att['target'] );
            insertAtt += ' target=\"{0}\"'.deal( att['target'] ) 
         } if ( att['rel'] ) {
            insertAtt += ' rel=\"{0}\"'.deal( att['rel'] );
         }

         return '<a {0}>{1}</a>'.deal(insertAtt, content);
     } else {
         return false;
     }
    }
}