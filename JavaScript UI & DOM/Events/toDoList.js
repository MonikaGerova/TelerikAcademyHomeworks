(function () {
    var addBtn = document.getElementById('btn-add-item');
    var result = document.getElementById('result');
    var list = document.createElement('ul');

    result.appendChild(list);
    addBtn.addEventListener('click', addItem);

    function addItem() {
        var item = document.getElementById('item').value;
        var len = list.childElementCount;
        var li = document.createElement('li');
        var show = document.createElement('button');
        var hide = document.createElement('button');
        var deleteItem = document.createElement('button');

        show.innerHTML = '  Show  ';
        show.id = 'show';
        hide.innerHTML = '  Hide  ';
        hide.id = 'hide';
        deleteItem.innerHTML = '  Delete  ';
        deleteItem.id = 'del';

        li.innerHTML = '<span>' + item + "</span>   ";
        li.className = len;
        li.appendChild(show);
        li.appendChild(hide);
        li.appendChild(deleteItem);
        list.appendChild(li);
        result.appendChild(list);


        show.style.display = 'none';
        hide.addEventListener('click', function () {
            hideItem(li)
        });
        show.addEventListener('click', function () {
            showItem(li)
        });
        deleteItem.addEventListener('click', function () {
            delItem(li)
        });


    }

    function hideItem(item) {
        item.childNodes.item(3).style.display = 'none';
        item.childNodes.item(2).style.display = '';
        item.childNodes.item(0).style.visibility = 'hidden';
    }

    function showItem(item) {
        item.childNodes.item(3).style.display = '';
        item.childNodes.item(2).style.display = 'none';
        item.childNodes.item(0).style.visibility = 'visible';
    }

    function delItem(item) {
        item.parentNode.removeChild(item);
    }
})();