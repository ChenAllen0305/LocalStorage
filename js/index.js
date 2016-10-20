var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var key = "pen";
var value = "apple";

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	


    // device APIs are available
    //
    function onDeviceReady() {
        window.localStorage.setItem(key, value);
        var key = “pen”;
        var value = window.localStorage.getItem(key);
        alert(value);
    }

    
