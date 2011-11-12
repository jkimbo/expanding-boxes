/* Author: J.Kim

*/

$(document).ready(function() {

    var percent = 10; // percentage increase in box size 
    var percenttimes = percent/100 + 1;
    var cont = $('#main');
    var duration = 1000;

    $('.box').each(function(index) {
        this.origleft = parseInt($(this).css('left')); // store the original left value to element
        this.origwidth = parseInt($(this).css('width')); // store the original left value to element
        this.origheight = parseInt($(this).css('height')); // store the original left value to element
    });

    $('.box').hover(function() {
        var box = $(this);
        var left = parseInt(box.css('left'));
        if(box.prev().length && box.next().length) { // center box
            box.animate({
                width: "330px",
                height: "220px",
                left: this.origleft-10
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: "300px",
                height: "200px"
            }, { duration: duration, queue: false });
            box.next().animate({
                width: "300px",
                height: "200px",
                left: box.next().get(0).origleft+10
            }, { duration: duration, queue: false });
        } else if(box.prev().length) { // right box
            box.animate({
                width: "330px",
                height: "220px",
                left: this.origleft-10
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: "300px",
                height: "200px"
            }, { duration: duration, queue: false });
        } else { // left box
            box.animate({
                width: "330px",
                height: "220px",
                left: this.origleft
            }, { duration: duration, queue: false });
            box.next().animate({
                width: "290px",
                height: "200px",
                left: box.next().get(0).origleft+20
            }, { duration: duration, queue: false });
        }
    }, function() {
        var box = $(this);
        if(box.prev().length && box.next().length) { // center box
            box.animate({
                width: this.origwidth,
                height: this.origheight,
                left: this.origleft 
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: box.prev().get(0).origwidth,
                height: box.prev().get(0).origheight,
            }, { duration: duration, queue: false });
            box.next().animate({
                width: box.next().get(0).origwidth,
                height: box.next().get(0).origheight,
                left: box.next().get(0).origleft
            }, { duration: duration, queue: false });
        } else if(box.prev().length) { // right box
            box.animate({
                width: this.origwidth,
                height: this.origheight,
                left: this.origleft
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: box.prev().get(0).origwidth,
                height: box.prev().get(0).origheight,
            }, { duration: duration, queue: false });
        } else { // left box
            box.animate({
                width: this.origwidth,
                height: this.origheight,
                left: this.origleft
            }, { duration: duration, queue: false });
            box.next().animate({
                width: box.next().get(0).origwidth,
                height: box.next().get(0).origheight,
                left: box.next().get(0).origleft
            }, { duration: duration, queue: false });
        }
    });
});

