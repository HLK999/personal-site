function photoDissolve ($arr, i, lingerTime, fadeTime, maxOpacity){
    var $elem = $arr.eq(i);
    var nextIdx = (i + 1) % $arr.length;
    var $nextElem = $arr.eq(nextIdx);
    setTimeout(function(){
        $elem.fadeTo(fadeTime, 0);
        $nextElem.fadeTo(fadeTime, maxOpacity, function(){
            photoDissolve($arr, nextIdx, lingerTime, fadeTime, maxOpacity);
        });
    }, lingerTime);
}

function equalizeHeight ($arr, heightInPx){
    // this function will take an $arr of elements currently stacked vertically, and force them on top of each other.  heightInPx should be the number of pixels required to move the second image up on top of the first.
    for (var i = 1; i < $arr.length; i++){
        $arr.eq(i).css('top', -heightInPx*i + 'px');
    }
    return $arr;
}

/*
PHOTO DISSOLVE
photo 1 hangs out for elemPause ms
after elemPause ms, the following two things happen simultaneously:
 - photo 1 fades out over fade ms
 - photo 2 fades in over fade ms
photo 2 hangs out for elemPause ms...
*/
