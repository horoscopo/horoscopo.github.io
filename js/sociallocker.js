
    var Delay = 2;//Seconds after them clicking the link, the gateway vanishes.
    var sociallocker_use = true;
    // Get the div to lock 
    var tolock = document.getElementById('to-lock');
    // Get the div locker 
    var locker = document.getElementById('div-locker');
    function setupgateway()
    {
	tolock.style.display = 'none';
	locker.style.display = 'block';
    }

    function removegateway()
    {
	tolock.style.display = 'block';
	locker.style.display = 'none';
    }



    function sociallocker_plusone(plusone) {
	console.log("test");
	if (plusone.state == "on") {
	    setTimeout('removegateway()', Delay*1000);
	}
    }
    
    jQuery(document).ready(function () {
	setupgateway();

	FB.Event.subscribe("edge.create", function (href, widget) {
	    setTimeout('removegateway()', Delay*1000);
	});
	twttr.ready(function (twttr) {
	    twttr.events.bind("tweet", function (event) {
		setTimeout('removegateway()', Delay*1000);
	    });
	});
    });