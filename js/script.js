/* Author: J.Kim

*/

$(document).ready(function() {

    var percent = 10; // percentage increase in box size 
    var percentplus = percent/100 + 1;
    var percentminus = 1 - percent/100;
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
        var prev = box.prev().get(0);
        var next = box.next().get(0);
        var diff = this.origwidth*percentplus - this.origwidth;

        /* Center box */
        if(box.prev().length && box.next().length) {
            box.animate({
                width: this.origwidth*percentplus,
                height: this.origheight*percentplus,
                left: this.origleft-(diff/2)
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: prev.origwidth - (diff/2),
                height: prev.origheight 
            }, { duration: duration, queue: false });
            box.next().animate({
                width: next.origwidth - (diff/2),
                height: next.origheight,
                left: next.origleft+(diff/2)
            }, { duration: duration, queue: false });
        } else 

        /* Right box */     
        if(box.prev().length) {
            box.animate({
                width: this.origwidth*percentplus,
                height: this.origheight*percentplus,
                left: this.origleft-(diff)
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: prev.origwidth - (diff),
                height: prev.origheight 
            }, { duration: duration, queue: false });
        } else 

        /* Left box */     
        {
            box.animate({
                width: this.origwidth*percentplus,
                height: this.origheight*percentplus
            }, { duration: duration, queue: false });
            box.next().animate({
                width: next.origwidth - (diff),
                height: next.origheight,
                left: next.origleft+diff
            }, { duration: duration, queue: false });
        }
    }, function() {
        var box = $(this);
        var left = parseInt(box.css('left'));
        var prev = box.prev().get(0);
        var next = box.next().get(0);

        if(box.prev().length && box.next().length) { // center box
            box.animate({
                width: this.origwidth,
                height: this.origheight,
                left: this.origleft 
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: prev.origwidth,
                height: prev.origheight,
            }, { duration: duration, queue: false });
            box.next().animate({
                width: next.origwidth,
                height: next.origheight,
                left: next.origleft
            }, { duration: duration, queue: false });
        } else if(box.prev().length) { // right box
            box.animate({
                width: this.origwidth,
                height: this.origheight,
                left: this.origleft
            }, { duration: duration, queue: false });
            box.prev().animate({
                width: prev.origwidth,
                height: prev.origheight,
            }, { duration: duration, queue: false });
        } else { // left box
            box.animate({
                width: this.origwidth,
                height: this.origheight,
                left: this.origleft
            }, { duration: duration, queue: false });
            box.next().animate({
                width: next.origwidth,
                height: next.origheight,
                left: next.origleft
            }, { duration: duration, queue: false });
        }
    });
});

