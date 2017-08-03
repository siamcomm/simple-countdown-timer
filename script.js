( function( $ ) {

    // Set the date we're counting down to
    var countDownDate = new Date("Oct 13, 2017 08:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id=""
        //
        // Option 1 - All in one line
        // document.getElementById("countdown").innerHTML = days + "days " + hours + "h "  + minutes + "m " + seconds + "s ";
        //
        // Option 2 - Breakout into seperate divs and display individual values
        document.getElementById("countdowndays").innerHTML = '<div class="cd-num">' + days + '</div> DAYS';
        document.getElementById("countdownhours").innerHTML = '<div class="cd-num">' + hours + '</div> HRS';
        document.getElementById("countdownmins").innerHTML = '<div class="cd-num">' + minutes + '</div> MINS';
        document.getElementById("countdownsecs").innerHTML = '<div class="cd-num">' + seconds + '</div> SECS';

        // If the count down is finished, hide the containing div
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").style.display = "none";
        }
    }, 1000);

} )( jQuery );
