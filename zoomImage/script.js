$(function () {
    'use strict';

    var $imgWrapper = $('.img-area .figure-ctn .img-wrapper');

    var mouseMove = function (event) {
        var imageZoom = $('.informacoes-compra-produto .image-zoom');

        var mouseOffset = {
            x: event.pageX,
            y: event.pageY
        };

        var imgOffset = {
            x: Math.round($(this).offset().left),
            y: Math.round($(this).offset().top)
        };

        var mousePos = {
            x: mouseOffset.x - imgOffset.x,
            y: mouseOffset.y - imgOffset.y
        };

        var imgSize = {
            width: $('#img-principal').width(),
            height: $('#img-principal').height()
        };

        var fullImgSize = {
            width: imageZoom.find('.full-image').width(),
            height: imageZoom.find('.full-image').height()
        };

        var square = $('.square');

        if (!square.length) {
            square = $('<div class="square"></div>');
            square.css({
                width: Math.min(imgSize.width * imageZoom.width() / fullImgSize.width, imgSize.width),
                height: Math.min(imgSize.height * imageZoom.height() / fullImgSize.height, imgSize.height)
            });
            $(this).append(square);
        }

        var squarePos = {
            top: Math.min(Math.max(mousePos.y - square.height() / 2, 0), $(this).height() - square.outerHeight()),
            left: Math.min(Math.max(mousePos.x - square.width() / 2, 0), $(this).width() - square.outerWidth())
        };

        square.css(squarePos);

        var razao = {
            x: fullImgSize.width / imgSize.width,
            y: fullImgSize.height / imgSize.height
        };

        imageZoom.find('.full-image-ctn').css({
            left: squarePos.left * razao.x * -1,
            top: squarePos.top * razao.y * -1
        });
    };

    var $iconZoom = $('<div class="icon-zoom"><div class="seta"></div><div class="arrow_box">Clique para zoom</div>');
    $imgWrapper.append($iconZoom);

    $imgWrapper.mousemove(function (mouse) {
        var offset = $(this).offset();
        var mousex, mousey;
        mousex = mouse.pageX - offset['left'];
        mousey = mouse.pageY - offset['top'];

        $(this).find('.icon-zoom').css("left", mousex);
        $(this).find('.icon-zoom').css("top", mousey);
    });

    $imgWrapper.mouseleave(function () {
        $('.informacoes-compra-produto .image-zoom').remove();
        $('.square').remove();
        $(this).unbind('mousemove', mouseMove);
        $(this).find('.icon-zoom').hide();
    });

    $imgWrapper.on('mouseenter', function () {
        if ($('img', $imgWrapper).attr('src').substr('-3') === 'gif') {
            return;
        }
        $(this).find('.icon-zoom').show();
    });

    $imgWrapper.on('click', function () {
        var $imgWrapperClick = $(this);

        $(this).find('.icon-zoom').hide();

        if ($('img', $(this)).attr('src').substr('-3') === 'gif') {
            return;
        }

        if (!$('.informacoes-compra-produto .image-zoom').length) {
            var divZoom = $('<div class="image-zoom"></div>');
            divZoom.css({
                position: 'absolute',
                overflow: 'hidden',
                width: '100%',
                height: $('.informacoes-compra-produto').height(),
                background: '#ffffff',
                border: '1px solid #b8b8b8',
                'z-index': 100
            });

            var divFullImgCtn = $('<div class="full-image-ctn"></div>');
            divFullImgCtn.css({
                position: 'absolute',
                width: 10000,
                height: 10000
            });

            var img = $('<img class="full-image" />');
            img.attr('src', $(this).find('img').attr('data-img-full'));
            divFullImgCtn.append(img);
            divZoom.append(divFullImgCtn);

            $('.informacoes-compra-produto').prepend(divZoom);

            if (divZoom.is(':visible')) {
                $('.informacoes-compra-produto .full-image-ctn .full-image').load(function () {
                    $imgWrapperClick.bind('mousemove', mouseMove);
                });
            }
        }
    });
})