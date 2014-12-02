(function () {

    function replaceAnchors(str){
        var count =0;

        for(var i =0; i<str.length; i+=1){
            if(str.substr(i,9)==='<a href="'){
                str = str.replace('<a href="', '[URL=');
                count +=1;
            }
            if(str.substr(i,2) ==='">' && count!==0){
                str= str.replace('">', ']')
            }
            if(str.substr(i,4) === '</a>'){
                str = str.replace('</a>','[/URL]');
            }
        }
        return str;
    }

    var string = '<p>Please visit <a href="http://academy.telerik. com">our site</a> to choose a training course. ' +
        'Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
    var replaced = replaceAnchors(string);

    console.log(string);
    console.log(replaced);
}());