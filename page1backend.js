
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
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function backdrop(){
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
}
backdrop();


const row1=[];
const row2=[];
const row3=[];
const row4=[];
const row5=[];
const row6=[];
const rows = [row1, row2, row3, row4, row5, row6];
var flower3 =  [2,  ["resources/flower1/flower.1_1.png","resources/flower1/flower.1_2.png","resources/flower1/flower.1_3.png","resources/flower1/flower.1_4.png","resources/flower1/flower.1_5.png"]];
var flower6 =  [2,  ["resources/flower3/flower.3_1.png","resources/flower3/flower.3_2.png","resources/flower3/flower.3_3.png","resources/flower3/flower.3_4.png","resources/flower3/flower.3_5.png"]];
var flower7 =  [10, ["resources/flowerPile/flower.3_1.png","resources/flowerPile/flower.3_2.png"]];
var flower8 =  [10, ["resources/flowerPile/flower.3_1.png","resources/flowerPile/flower.3_3.png"]];
var flower9 =  [10, ["resources/flowerPile/flower.3_1.png","resources/flowerPile/flower.3_4.png"]];
var flower10 = [10, ["resources/flowerPile/flower.3_1.png","resources/flowerPile/flower.3_5.png"]];
var flower11 = [10, ["resources/flowerPile/flower.4_1.png","resources/flowerPile/flower.4_2.png"]];
var flower12 = [10, ["resources/flowerPile/flower.4_1.png","resources/flowerPile/flower.4_3.png"]];
var flower13 = [10, ["resources/flowerPile/flower.4_1.png","resources/flowerPile/flower.4_4.png"]];
var flower14 = [10, ["resources/flowerPile/flower.4_1.png","resources/flowerPile/flower.4_5.png"]];
var flower15 = [10, ["resources/flowerPile/flower.5_1.png","resources/flowerPile/flower.5_2.png"]];
var flower16 = [10, ["resources/flowerPile/flower.5_1.png","resources/flowerPile/flower.5_3.png"]];
var flower17 = [10, ["resources/flowerPile/flower.5_1.png","resources/flowerPile/flower.5_4.png"]];
var flower18 = [10, ["resources/flowerPile/flower.5_1.png","resources/flowerPile/flower.5_5.png"]];

var flowerSelection = [flower3,flower6,flower7,flower8,flower9,flower10,flower11,flower12,flower13,flower14,flower15,flower16,flower17,flower18];
var flowerNum = 0;

var groundSpace = [];

var test = true;
var tight = true;
var multiple = 5;
var spacing = 10;
var maxW = 28;
var xpos, ypos, fleur, gro;
var first = true;

function baseInit(){
	if (test){
		multiple = 2;
	}
	else{
		multiple = 5;
	}
	if (tight){
		maxW = 28;
		spacing = 10;
	}
	else{
		maxW = 14;
		spacing = 20;
	}
	console.log("outside forloop");
	for (i=0;i<maxW-1;i++){
		for (j=0;j<rows.length;j++){
			groundSpace.push([(i+1)*spacing, j]);
			//console.log(j);
		}
	}

}

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

		if (wordCurrency>flowerNum*multiple){		//	Reset to 5 plz	It is currently within the if the word has changed. May not be necessary
			wordCurrency-=flowerNum*multiple		//Another way of saying reset to 0
			addFlowers(count);
			
		}
		backdrop();
		init(count);
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



function init(count=0){
	for (i=0;i<rows.length;i++){
		for (j=0;j<rows[i].length;j++){
			//console.log(j);
			var lol = rows[i];
			var current;
			[xPos, yPos, flowerType, start]=lol[j];
			[countMin, img]=flowerType;
			var disp = count-start;
			if (disp<countMin){
				current = 0;
			}
			else if ((disp/countMin)>=img.length){
				current = img.length-1;
			}
			else {
				var why = disp%countMin;
				current = (disp-why)/countMin;
			}

			drawImg(img[current],xPos, yPos)
			//console.log(img[current]);
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

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
// make a list with all the locations in it, then remove that for each time it is called
//var i = rows[em];

function addFlowers(count=0){
	console.log("first");
	if (first){
		first = false;
		baseInit();
		console.log(first);
		
		
	}
	if (groundSpace.length>0){
		console.log(first);
		var location = groundSpace.splice(getRandomInt(0, groundSpace.length),1);//chooses and removes position
		var y = location[0][1];
		var len = location[0][0];
		console.log(len);
		var flow = getRandomInt(0, flowerSelection.length);	//chose rand flower
		var start = count;
		console.log(rows[y]);
		var tuple = [len, y*10+100, flowerSelection[flow], start];
		console.log(rows);
		rows[y].push(tuple);
		flowerNum++;
	}
	else {
		console.log("THIS B**** EMPTY!  YEEEET!!!! ");
	}
	
}

function baseGenerate(){
	for (p=0;p<10;p++){
		addFlowers();
	}
}
function appendFlow(){		//this should be adjusted as well to specify flower type in the scene.
	if (count>10000){
		flowerSelection.append(flower3);
	}
	else if (count>5000){
		flowerSelection.append(flower3);
	}
} 

//init();

//make_base();

