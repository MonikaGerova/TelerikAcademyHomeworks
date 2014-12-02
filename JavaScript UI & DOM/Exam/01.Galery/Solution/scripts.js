function createImagesPreviewer(selector, items) {
    var selector = document.querySelector(selector);

    var centeredDiv = document.createElement('div');
    centeredDiv.className = 'center';
    centeredDiv.style.width = '680px';
    centeredDiv.style.height = '430px';
    centeredDiv.style.border = '1px solid black';
    centeredDiv.style.position = 'absolute';
    centeredDiv.style.top = '60px';
    centeredDiv.style.left = '300px';

    var titleInSelected = document.createElement('div');
    titleInSelected.className = 'title';
    titleInSelected.style.textAlign = 'center';
    var imageInSelected = document.createElement('div');
    imageInSelected.className = 'image';


    centeredDiv.appendChild(titleInSelected);
    centeredDiv.appendChild(imageInSelected);

    var rightContainer = document.createElement('div');
    rightContainer.className = 'right';
    rightContainer.style.float = 'right';
    rightContainer.style.marginRight = '20px'
    rightContainer.style.height = '600px';
    rightContainer.style.overflow = 'overlay';
    rightContainer.style.width = '230px';


    var lengthOfItems = items.length;
    var filterBox = document.createElement('div');
    var input = document.createElement('input');
    input.type = 'text';
    filterBox.appendChild(input);
    filterBox.className = 'filter';
    rightContainer.appendChild(filterBox);

    var div = document.createElement('div');
    div.className = 'image-container';

    var divFrag = document.createDocumentFragment();
    var selFrag = document.createDocumentFragment();

    for (var i = 0; i < lengthOfItems; i++) {
        var div = document.createElement('div');
        var title = document.createElement('h3');
        var img = document.createElement('img');

        title.innerHTML = items[i].title;
        img.src = items[i].url;
        img.style.width = '200px';
        img.style.height = '150px';
        div.className = 'image-container';
        div.style.margin = '10px'
        div.addEventListener('click', function (ev) {
            var childrens = this.childNodes;

            //console.log(childrens);
            var centeredTitle = childrens[0].cloneNode(true);
            var centeredImage = childrens[1].cloneNode(true);

            centeredImage.style.width = '100%';
            centeredImage.style.height = '100%';

            titleInSelected.innerHTML = centeredTitle.outerHTML;
            imageInSelected.innerHTML = centeredImage.outerHTML;

            var lastSelected = document.getElementsByClassName('selected');
            lastSelected[0].className = 'image-container';
            var allDivs = selector.querySelectorAll('.image-container');

            for (var j = 0; j < allDivs.length; j++) {
                allDivs[j].style.backgroundColor = ''

            }

            if (this.className !== 'image-container selected') {

                this.className += ' selected';
            }

            var curSelected = rightContainer.getElementsByClassName('selected');
            curSelected[0].style.backgroundColor = 'blue';

        })
        div.addEventListener('mouseover', function () {
            if (this.className !== 'image-container selected') {
                this.style.backgroundColor = 'red';
            }
        })
        div.addEventListener('mouseout', function () {
            if (this.className !== 'image-container selected') {
                this.style.backgroundColor = '';
            }
        })

        div.appendChild(title);
        div.appendChild(img);

        if (i == 0) {
            var centeredTitle = title.cloneNode(true);
            var centeredimg = img.cloneNode(true);

            centeredimg.style.width = '100%';
            centeredimg.style.height = '100%';
            titleInSelected.appendChild(centeredTitle);
            imageInSelected.appendChild(centeredimg);

            div.className += ' selected';
        }

        divFrag.appendChild(div);
    }


    rightContainer.appendChild(divFrag);
    selector.appendChild(rightContainer);
    selector.appendChild(centeredDiv)


    input.addEventListener('keyup', function () {

        var val = this.value;
        var len = val.length;
        var titles = rightContainer.querySelectorAll('h3');

        for (var i = 0; i < titles.length; i++) {
            for (var j = 0; j < titles.length; j++) {
                var curTitle = titles[i].textContent.toLowerCase();
                var substr = curTitle.substr(j, len);
                var isValexist = false;
                if (substr == val) {
                    var parent = titles[i].parentNode;
                    parent.style.display = '';
                    break;
                } else {
                    var parent = titles[i].parentNode;
                    parent.style.display = 'none';
                }
            }
        }
    })


}