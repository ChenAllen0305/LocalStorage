var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var key = "pen";
var value = "apple";

window.localStorage.setItem(key, value);

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	


    // device APIs are available
    //
    function onDeviceReady() {
		alert("apple pen");
    }

    
