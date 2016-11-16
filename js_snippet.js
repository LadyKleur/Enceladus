$(function() {

    // make stars blink/fade
    function starBlink() {
        $('.stars1').fadeTo( "1000", 0.3 ).delay(1000).fadeTo("900", 0.5);
        $('.stars2').delay(300).fadeTo( "900", 0.3 ).delay(900).fadeTo("800", 0.5);
        $('.stars3').delay(1300).fadeTo( "1300", 0.3 ).delay(1200).fadeTo("1100", 0.5);
    }

    // random position of .shootingStar and move it across the screen
    function comet() {
        var bodyWidth = $(window).width();
        var x = Math.floor((Math.random() * bodyWidth));

        $('.shootingStar').css('left', x);
        $(".shootingStar").animate({
            marginLeft:"100%", marginBottom:"100%"
        }, 800); 
    }

    // reset .shootingStar position 
    function cometReset() {
        $('.shootingStar').css({
            "marginBottom" : "-10px",
            "marginLeft" : "0"
        });
    }

    // call and repeat functions
    setInterval(comet, 5000);
    setInterval(cometReset, 4000);
    setInterval(starBlink, 2000);

});