$.fn.gallery = function (colls) {
    if (colls == undefined) {
        var cols = 4;
    } else {
        var cols = colls;
    }

    $this = $(this);
    $this.addClass('gallery');
    $this.find('.selected').hide();

    var imgContainer = $this.find('.image-container');
    var widthImgContainer = parseInt(imgContainer.css('width'));

    $('.gallery-list').css('width', cols * widthImgContainer + cols * 10 + 'px');

    //  var clicked = false;

    $this.on('click', '.image-container', function () {
        var $clicked = $(this);

        var img = $clicked.find('img');
        var dataInfo = img.attr('data-info');
        var imgSrc = img.attr('src');
        var previousSrc = generatePreviousImg(dataInfo);
        var nextSrc = generateNextImg(dataInfo)

        var selected = $this.find('.selected');
        var curr = selected.find('.current-image').children();
        var previousImg = selected.find('.previous-image').children();
        var nextImg = selected.find('.next-image').children();

        previousImg.attr('src', previousSrc);
        nextImg.attr('src', nextSrc)
        curr.attr('src', imgSrc);
        selected.show();

        $('.gallery-list').addClass('blurred');

        previousImg.on('click', function (ev) {
            nextSrc = imgSrc;
            imgSrc = previousSrc;
            previousSrc = previousImg.attr('src');
            if (previousSrc.length === 10) {
                var num = parseInt(previousSrc[5]);
            } else {
                var num = parseInt(previousSrc[5] + previousSrc[6])
            }
            num = parseInt(num);
            if (num === 1) {
                num = 12;
            } else {
                num -= 1;
            }
            previousSrc = 'imgs/' + num + '.jpg';
            previousImg.attr('src', previousSrc);
            nextImg.attr('src', nextSrc)
            curr.attr('src', imgSrc);

        });
        curr.on('click', function () {
            selected.hide();
            $('.gallery-list').removeClass('blurred');
        })
        nextImg.on('click', function () {
            previousSrc = imgSrc;
            imgSrc = nextSrc;
            nextImg.attr('src');
            if (nextSrc.length === 10) {
                var num = parseInt(nextSrc[5]);
                nextSrc = nextSrc.replace(nextSrc[5], num + 1);
            } else {
                var num = parseInt(nextSrc[5] + nextSrc[6]);

            }
            num = parseInt(num);
            if (num === 12) {
                num = 1;
            } else {
                num += 1;
            }

            nextSrc = 'imgs/' + num + '.jpg';
            previousImg.attr('src', previousSrc);
            nextImg.attr('src', nextSrc)
            curr.attr('src', imgSrc);
        })
    });


    function generatePreviousImg(dataInfo) {

        var previous = $this.find('.image-container').children();
        if (dataInfo === '1') {
            previous = previous.last();
            // next = next.parent().next().children();
        } else {
            previous = $this.find('.image-container').eq(parseInt(dataInfo) - 2).children();
        }
        return previous.attr('src');
    }

    function generateNextImg(dataInfo) {
        var next = $this.find('.image-container').children();
        if (dataInfo === '12') {
            next = next.first();
        } else {
            next = $this.find('.image-container').eq(parseInt(dataInfo)).children()
        }
        return next.attr('src');
    }
};