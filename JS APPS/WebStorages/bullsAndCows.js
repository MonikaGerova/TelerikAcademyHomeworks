(function () {
    var digit1, digit2, digit3, digit4;
    var bulls = 0,
        cows = 0;
    var countOfSteps = 0;
    var exceptions = [];
    var list = document.getElementById('list-of-high-scores');
    var innerHTML = list.innerText;
    var m;

    if (!localStorage['high-scores']) {
        localStorage['high-scores'] = ' ';
        m = ' ';
    }
    else {
        m = localStorage.getItem('high-scores');
    }

    if (innerHTML == '') {
        list.innerHTML = m;

    } else {
        list.innerHTML += m;
    }

    digit1 = randNum(1, 9, exceptions)
    exceptions.push(digit1);
    digit2 = randNum(0, 9, exceptions);
    exceptions.push(digit2);
    digit3 = randNum(0, 9, exceptions);
    exceptions.push(digit3);
    digit4 = randNum(0, 9, exceptions);

    var randomNum = digit1 + '' + digit2 + '' + digit3 + '' + digit4;

    if (sessionStorage['randNum']) {
        sessionStorage.setItem('randNum', randomNum);
    }

    var winningNum = sessionStorage['randNum'];
    var input = document.getElementById('input');

    addEventListener('change', function () {
        var placeToAppend = document.getElementById('suggestions');
        var suggestedNum = input.value;
        var html = document.createElement('h3');

        countOfSteps += 1;

        if (suggestedNum === winningNum) {
            html.innerHTML = suggestedNum + '---' + ' 4 bulls ';
            placeToAppend.appendChild(html);
            youWin();
        } else {
            for (var i = 0; i < winningNum.length; i++) {
                if (suggestedNum[i] == winningNum[i]) {
                    bulls += 1;
                } else {
                    for (var j = 0; j < winningNum.length; j++) {
                        if (suggestedNum[i] == winningNum[j]) {
                            cows += 1;
                        }
                    }
                }
            }

            if (bulls == 4) {
                html.innerHTML = suggestedNum + '---' + bulls + ' bulls';
                placeToAppend.appendChild(html);
                youWin();
            } else {
                html.innerHTML = suggestedNum + '---' + bulls + ' bulls and ' + cows + ' cows';
                placeToAppend.appendChild(html);
            }

            bulls = 0;
            cows = 0;
        }
    });

    function youWin() {
        var nickname = prompt('You win! Write your nickname!');
        var li = document.createElement('li');

        li.innerHTML = nickname + ' - ' + countOfSteps + 'steps';
        localStorage['nickname'] = nickname;
        localStorage['high-scores'] += li.outerHTML;

        var wantToPlay = confirm('Want to play again')

        if (wantToPlay) {
            document.location.reload(true);
        }
    }

    function randNum(min, max, exceptions) {
        var f = Math.floor(Math.random() * (max - min) + min);
        var tempArr = [];
        var lastChecked = '';

        for (var i = 0; i < exceptions.length; i++) {
            if (f == exceptions[i] || f == lastChecked) {
                lastChecked = exceptions[i];
                if (f == 9 || f == 8) {
                    f -= 2;
                }

                f += 2;
            }
        }

        return f;
    }
})();