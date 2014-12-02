function result(){
    var text = document.getElementsByTagName('input')[0];
    var fontColor = document.getElementsByTagName('input')[1].value;
    var backgroundColor = document.getElementsByTagName('input')[2].value;


    text.style.color = fontColor;
    text.style.backgroundColor  = backgroundColor;


}