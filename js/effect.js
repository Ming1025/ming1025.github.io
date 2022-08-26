var canvas_w=2560;
var canvas_h=2560;
/*------------------------------------------------choose effect------------------------------------------------*/
function choose_effect() {
	"use strict";
	var random_choose_number = Math.floor(Math.random()*30);
	if (random_choose_number>20) {}
	else if (random_choose_number>16) {effect_move_w();}
	else if (random_choose_number>14) {effect_move_h();}
	else if (random_choose_number>12) {effect_move_all();}
	else if (random_choose_number>10) {effect_cube_w();}
	else if (random_choose_number>8) {effect_repeat_x();}
	else if (random_choose_number>6) {effect_repeat_y();}
	else if (random_choose_number>8) {effect_light();}
	else if (random_choose_number>4) {effect_cube_h();}
	else {effect_oldtv();}
}

/*-------------------------------------------------effect list-------------------------------------------------*/
function effect_oldtv() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
	var old_tv_value = Math.random();
	var old_tv_color;
	if(old_tv_value>0.5){old_tv_color="black";}
	else{old_tv_color="white";}
	ctx.globalAlpha=0.5;
	var po = Math.floor(Math.random())*2;
for (var draw_cloth=0;draw_cloth<(canvas_h/4);draw_cloth++) {
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.moveTo(0,draw_cloth*4+po);
	ctx.lineTo(canvas_w,draw_cloth*4+po);
	ctx.strokeStyle=old_tv_color;
	ctx.stroke();
	}
}

function effect_move_w() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
for (var move_time=0;move_time<10;move_time++) {
var move_height = Math.floor(Math.random()*(canvas_h/4));
var move_position_x = Math.floor(Math.random()*canvas_w);
var move_position_y = Math.floor(Math.random()*canvas_h);
var imgData1=ctx.getImageData(0,move_position_y,move_position_x,move_height);
var imgData2=ctx.getImageData(move_position_x,move_position_y,canvas_w-move_position_x,move_height);
ctx.putImageData(imgData1,canvas_w-move_position_x,move_position_y);
ctx.putImageData(imgData2,0,move_position_y);
}
}
function effect_move_h() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
for (var move_time=0;move_time<10;move_time++) {
var move_width = Math.floor(Math.random()*(canvas_w/4));
var move_position_x = Math.floor(Math.random()*canvas_w);
var move_position_y = Math.floor(Math.random()*canvas_h);
var imgData1=ctx.getImageData(move_position_x,0,move_width,move_position_y);
var imgData2=ctx.getImageData(move_position_x,move_position_y,move_width,canvas_h-move_position_y);
ctx.putImageData(imgData1,move_position_x,canvas_h-move_position_y);
ctx.putImageData(imgData2,move_position_x,0);
}
}
function effect_move_all() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
	var img1x = Math.floor(Math.random()*canvas_w/5*4);var img1y = Math.floor(Math.random()*canvas_h/5*4);
	var img2x = Math.floor(Math.random()*canvas_w/5*4);var img2y = Math.floor(Math.random()*canvas_h/5*4);
	var img3x = Math.floor(Math.random()*canvas_w/5*4);var img3y = Math.floor(Math.random()*canvas_h/5*4);
	var img4x = Math.floor(Math.random()*canvas_w/5*4);var img4y = Math.floor(Math.random()*canvas_h/5*4);
	var img5x = Math.floor(Math.random()*canvas_w/5*4);var img5y = Math.floor(Math.random()*canvas_h/5*4);
	var img6x = Math.floor(Math.random()*canvas_w/5*4);var img6y = Math.floor(Math.random()*canvas_h/5*4);
	var img7x = Math.floor(Math.random()*canvas_w/5*4);var img7y = Math.floor(Math.random()*canvas_h/5*4);
	var img8x = Math.floor(Math.random()*canvas_w/5*4);var img8y = Math.floor(Math.random()*canvas_h/5*4);
	var imgData1=ctx.getImageData(img1x,img1y,canvas_w/5,canvas_h/5);
	var imgData2=ctx.getImageData(img2x,img2y,canvas_w/5,canvas_h/5);
	var imgData3=ctx.getImageData(img3x,img3y,canvas_w/5,canvas_h/5);
	var imgData4=ctx.getImageData(img4x,img4y,canvas_w/5,canvas_h/5);
	var imgData5=ctx.getImageData(img5x,img5y,canvas_w/5,canvas_h/5);
	var imgData6=ctx.getImageData(img6x,img6y,canvas_w/5,canvas_h/5);
	var imgData7=ctx.getImageData(img7x,img7y,canvas_w/5,canvas_h/5);
	var imgData8=ctx.getImageData(img8x,img8y,canvas_w/5,canvas_h/5);
	ctx.putImageData(imgData1,img2x,img2y);
	ctx.putImageData(imgData2,img3x,img3y);
	ctx.putImageData(imgData3,img4x,img4y);
	ctx.putImageData(imgData4,img5x,img5y);
	ctx.putImageData(imgData5,img6x,img6y);
	ctx.putImageData(imgData6,img7x,img7y);
	ctx.putImageData(imgData7,img8x,img8y);
	ctx.putImageData(imgData8,img1x,img1y);
}
function effect_cube_w() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
	ctx.globalAlpha=0.2;
		for (var cube_time=0;cube_time<10;cube_time++) {
		var random_color = (Math.floor(Math.random()*16777215)).toString(16);
    		random_color = "#" + ("000000" + random_color).slice(-6);
		var cube_w = Math.floor(Math.random()*canvas_w/2);
		var cube_h = Math.floor(Math.random()*canvas_h/8);
		ctx.fillStyle = random_color;
		ctx.fillRect(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),cube_w,cube_h);
		}
}
function effect_cube_h() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
	ctx.globalAlpha=0.2;
		for (var cube_time=0;cube_time<10;cube_time++) {
		var random_color = (Math.floor(Math.random()*16777215)).toString(16);
    		random_color = "#" + ("000000" + random_color).slice(-6);
		var cube_w = Math.floor(Math.random()*canvas_w/8);
		var cube_h = Math.floor(Math.random()*canvas_h/2);
		ctx.fillStyle = random_color;
		ctx.fillRect(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),cube_w,cube_h);
		}
}
function effect_light() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
	ctx.globalAlpha=0.5;
		var my_gradient=ctx.createLinearGradient(0,Math.floor(Math.random()*canvas_h),canvas_w,Math.floor(Math.random()*canvas_h));
		my_gradient.addColorStop(0,"#000000");
		my_gradient.addColorStop(Math.random(),"#FFFFFF");
		my_gradient.addColorStop(1,"#000000");
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0,0,canvas_w,canvas_h);
}
function effect_repeat_x() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
var repeat_x_x = Math.floor(Math.random()*19)*(canvas_w/20);
var imgData1=ctx.getImageData(repeat_x_x,0,canvas_w/20,canvas_h);
for(var repeat_time=0;repeat_time<20;repeat_time++){
ctx.putImageData(imgData1,repeat_time*(canvas_w/20),0);
}
}
function effect_repeat_y() {
"use strict";var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//effcet
var repeat_y_y = Math.floor(Math.random()*19)*(canvas_h/20);
var imgData1=ctx.getImageData(0,repeat_y_y,canvas_w,canvas_h/20);
for(var repeat_time=0;repeat_time<20;repeat_time++){
ctx.putImageData(imgData1,0,repeat_time*(canvas_h/20));
}
}