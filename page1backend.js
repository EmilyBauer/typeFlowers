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
		if (count>=prevCount){
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
var ctx = canvas.getContext("2d");
ctx.fillStyle = " #227C2F"; //60A33D, 52A02C, 227C2F
ctx.fillRect(0,95,300,100);
ctx.fillStyle = " #5EA6D0"; //60A33D
ctx.fillRect(0,0,300,95);
//300 wide, 150 tall?
ctx.fillStyle = "#BDEB0A";
ctx.fillRect(10,100, 280, 5);
ctx.fillRect(10,110, 280, 5);
ctx.fillRect(10,120, 280, 5);
ctx.fillRect(10,130, 280, 5);
ctx.fillRect(10,140, 280, 5);


var row1=[];
var row2=[];
var row3=[];
var row4=[];
var row5=[];
var row6=[];
var rows = [row1, row2, row3, row4, row5, row6];
var flower1 = [50, 3, ["resources/flower1/flower.1_1.png","resources/flower1/flower.1_2.png","resources/flower1/flower.1_3.png","resources/flower1/flower.1_4.png","resources/flower1/flower.1_5.png"]];
var flower2 = [50, 4, ["resources/flower1/flower.1_1.png","resources/flower1/flower.1_2.png","resources/flower1/flower.1_3.png","resources/flower1/flower.1_4.png","resources/flower1/flower.1_5.png"]];
var flower3 = [50, 2, ["resources/flower1/flower.1_1.png","resources/flower1/flower.1_2.png","resources/flower1/flower.1_3.png","resources/flower1/flower.1_4.png","resources/flower1/flower.1_5.png"]];
var flower4 = [50, 4, ["resources/flower2/flower.2_1.png","resources/flower2/flower.2_2.png","resources/flower2/flower.2_3.png","resources/flower2/flower.2_4.png","resources/flower2/flower.2_5.png"]];

var flowerSelection = [flower1, flower2,flower3];

function init(){
	for (i=0;i<rows.length;i++){
		for (j=0;j<rows[i].length;j++){
			//console.log(j);
			var lol = rows[i];
			[xPos, yPos, flowerType]=lol[j];
			[countMin, current, img]=flowerType;
			drawImg(img[current],xPos, yPos)
			console.log(img[current]);
		}
	}
}



function drawImg(img, X, Y){
	var base_image = new Image();
	base_image.src = img;
	base_image.onload = function(){
		ctx.drawImage(base_image, X, Y-32);
	}
}

//(xpos,ypos) = mouse.getPos
//init();

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
function addFlowers(){
	var em = getRandomInt(0, rows.length)
	var i = rows[em];	//choose a row	
	var len = getRandomInt(1, 28)*10;
	var flow = getRandomInt(0, flowerSelection.length);
	var y = em*10+100;
	var tuple = [len, y, flowerSelection[flow]];
	i.push(tuple);
	//console.log(i);
}

for (p=0;p<30;p++){
	addFlowers();
}

init();

//make_base();


