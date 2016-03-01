function fadeInAndOut($arr, i, d){
    /*
    this function takes three arguments:
    1.  $arr is a jquery array of DOM objects.  Each one, you will want to fade in and then out.
    2.  i is the index number of the element that is currently up for fading in/ fading out
    3.  d is a JavaScript object.  d stands for "durations".
    d should look something like this:
    {
        initialPause: 500,
        fadeInTime: 4000,
        elemPause: 1000,
        fadeOutTime: 2000
    }
    Each property in d represents a duration, in milliseconds.  The numbers themselves can be replaced.  initialPause is the number of ms before the element begins to fade in.  fadeInTime is the number of milliseconds that it takes for the element to fully fade in.  elemPause is the number of milliseconds of pause while the element is fully faded in, before it starts to fade out.  fadeOutTime is the number of milliseconds that it takes for the elementto fully fade out.
    */
    var $elem = $arr.eq(i);
    setTimeout(function(){
        $elem.show();
        $elem.fadeTo(d.fadeInTime, 0.5, function(){
            setTimeout(function(){
                $elem.fadeTo(d.fadeOutTime, 0, function(){
                    $elem.hide();
                    i = (i + 1) % $arr.length;
                    fadeInAndOut($arr, i, d);
                });
            }, d.elemPause);
        });
    }, d.initialPause);
}

$(function(){
    var $images = $("img");
    var d = {
        initialPause: 500,
        fadeInTime: 3000,
        elemPause: 1000,
        fadeOutTime: 2000
    };
    fadeInAndOut($images, 0, d);
});
