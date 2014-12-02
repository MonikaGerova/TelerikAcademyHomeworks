function divs() {
    var result = howManyDivsInPage();
    document.getElementById("result").innerHTML = "The number of Divs is " + result;
    // console.log(result);
}
function howManyDivsInPage() {
    var count = document.getElementsByTagName('div').length;
    return count;
}
