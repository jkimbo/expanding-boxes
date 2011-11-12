/* Author: J.Kim

*/

$(document).ready(function() {

    var percent = 10; // percentage increase in box size
    var cont = $('#main');
    var duration = 1000;

    $('.box').hover(function() {
        var box = $(this);
        var left = parseInt(box.css('left'));
        if(box.prev().length && box.next().length) { // center box
            box.animate({
                width: "330px",
                height: "220px",
                left: left-10
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: "300px",
                height: "200px"
            }, { duration: duration, queue: false });
            box.next().animate({
                width: "300px",
                height: "200px",
                left: parseInt(box.next().css('left'))+10
            }, { duration: duration, queue: false });
        } else if(box.prev().length) { // right box
            box.animate({
                width: "330px",
                height: "220px",
                left: left-20
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: "290px",
                height: "200px"
            }, { duration: duration, queue: false });
        } else { // left box
            box.animate({
                width: "330px",
                height: "220px",
                left: left
            }, { duration: duration, queue: false });
        }
    }, function() {
        var box = $(this);
        var left = parseInt(box.css('left'));
        if(box.prev().length && box.next().length) { // center box
            box.animate({
                width: "310px",
                height: "200px",
                left: left+10
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: "310px",
                height: "200px"
            }, { duration: duration, queue: false });
            box.next().animate({
                width: "310px",
                height: "200px",
                left: parseInt(box.next().css('left'))-10
            }, { duration: duration, queue: false });
        } else if(box.prev().length) { // right box
            box.animate({
                width: "310px",
                height: "200px",
                left: left+20
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: "310px",
                height: "200px"
            }, { duration: duration, queue: false });
        } else { // left box
            box.animate({
                width: "310px",
                height: "200px",
                left: left
            }, { duration: duration, queue: false });
        }
    });
});

