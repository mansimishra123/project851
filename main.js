//Create a reference for canvas

var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image

rover_x=10;
rover_y=10;

rover_width=100;
rover_height=90;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

rover_width=100;
rover_height=90;

function add() {
	//upload car, and background images on the canvas.
	background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;

    car_img=new Image();
    car_img.onload=uploadrover;
    car_img.src=rover_image;


}



function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}



function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_img,car_x,car_y,car_width,car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car_y>=0){
		car_y=car_y-10;
		 console.log("when up arrow is pressed x="+car_x+"| y="+car_y);
		 uploadBackground()
		 uploadrover()
	 }
	 
	 }


function down()
{
	//Define function to move the car downward
	if(car_y<=500){
		car_y=car_y+10;
		 console.log("when down arrow is pressed x="+car_x+"| y="+car_y);
		 uploadBackground()
		 uploadrover()
	 }
	 
	 }


function left()
{
	//Define function to move the car left side
	if(car_x>=0){
		car_x=car_x-10;
		 console.log("when left arrow is pressed x="+car_x+"| y="+car_y);
		 uploadBackground()
		 uploadrover()
	 }
	 
	 }



function right()
{
	//Define function to move the car right side
	function right(){

		if(car_x<=700){
		   car_x=car_x+10;
			console.log("when right arrow is pressed x="+car_x+"| y="+car_y);
			uploadBackground()
			uploadrover()
		}
		
		}


}
