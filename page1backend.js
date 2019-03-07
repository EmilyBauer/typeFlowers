$('#TheScreen').prepend('<img id="bgGarden" src="bgGarden.png" />')

var iLastTime = 0;
var iTime = 0;
var iTotal = 0;
var iKeys = 0;
var count = 0;
var prevCount = 0;
var thenTime = 0;
var wordCurrency = 0;
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);


$('#textarea1').on('keyup',function(){
	count = $('#textarea1').val().trim().split(/\s/).length;
	$('#writtenwords').text(count);

}); 


$(function() {
	$("#textarea1").keyup(checkSpeed);
});

function refresh(){
	iLastTime = 0;
	iTime = 0;
	iTotal = 0;
	iKeys = 0;
	count = 0;
	prevCount = 0;
	thenTime = 0;
	wordCurrency = 0;
	totalSeconds = 0;
	document.getElementById("textarea1").value="";
	console.log("test");
}


function checkSpeed() {
	iTime = new Date().getTime();
	count = $('#textarea1').val().trim().split(/\s/).length;

	if (iLastTime != 0) {
			iTotal += iTime - iLastTime;
			$('#avgWpm').html(Math.round(count / iTotal * 60000, 2));
	}
	if (count!=prevCount){

		$('#liveWpm').html(Math.round((count-prevCount) / (iTime - thenTime) * 60000, 2));
		if (count!=prevCount){
			wordCurrency++;
		}
		prevCount = count;
		thenTime = iTime;

	}

	iLastTime = iTime;
	
}



function setTime() {
	++totalSeconds;
	secondsLabel.innerHTML = pad(totalSeconds % 60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
	var valString = val + "";
	if (valString.length < 2) {
		return "0" + valString;
	} else {
		return valString;
	}
}


var canvas = document.getElementById("myCanvas");
var ctv = canvas.getContext("2d");
ctv.fillStyle = " #356D32"; //60A33D
ctv.fillRect(0,0,600,400);

var ctx = canvas.getContext("2d");
ctx.fillStyle = "#60A33D";
ctx.fillRect(10,90, 280, 5);
ctx.fillRect(10,100, 280, 5);
ctx.fillRect(10,110, 280, 5);
ctx.fillRect(10,120, 280, 5);
ctx.fillRect(10,130, 280, 5);
ctx.fillRect(10,140, 280, 5);
