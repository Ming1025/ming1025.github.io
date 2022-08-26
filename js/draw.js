var canvas_w=2560;
var canvas_h=2560;
var canvas_max;
var canvas_min;
if (canvas_h>canvas_w) {canvas_max=canvas_h;canvas_min=canvas_w;}
else if (canvas_h<canvas_w) {canvas_max=canvas_w;canvas_min=canvas_h;}
else{canvas_max=canvas_w;canvas_min=canvas_h;}
/*-------------------------------------------------Random_Draw-------------------------------------------------*/
random_draw();
function random_draw() {
	"use strict";
	var random_choose_number = Math.floor(Math.random()*26);
	if (random_choose_number>25) {draw_a();}
	else if (random_choose_number>24) {draw_b();}
	else if (random_choose_number>23) {draw_c();}
	else if (random_choose_number>22) {draw_d();}
	else if (random_choose_number>21) {draw_e();}
	else if (random_choose_number>20) {draw_f();}
	else if (random_choose_number>19) {draw_g();}
	else if (random_choose_number>18) {draw_h();}
	else if (random_choose_number>17) {draw_i();}
	else if (random_choose_number>16) {draw_j();}
	else if (random_choose_number>15) {draw_k();}
	else if (random_choose_number>14) {draw_l();}
	else if (random_choose_number>13) {draw_m();}
	else if (random_choose_number>12) {draw_n();}
	else if (random_choose_number>11) {draw_o();}
	else if (random_choose_number>10) {draw_p();}
	else if (random_choose_number>9) {draw_q();}
	else if (random_choose_number>8) {draw_r();}
	else if (random_choose_number>7) {draw_s();}
	else if (random_choose_number>6) {draw_t();}
	else if (random_choose_number>5) {draw_u();}
	else if (random_choose_number>4) {draw_v();}
	else if (random_choose_number>3) {draw_w();}
	else if (random_choose_number>2) {draw_x();}
	else if (random_choose_number>1) {draw_y();}
	else {draw_z();}
}
/*-----------------------------------------------Random_Draw End-----------------------------------------------*/
/*---------------------------------------------------Draw_A---------------------------------------------------*/
function draw_a() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle= "#FF00FF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	var img=document.getElementById("lamp");
ctx.drawImage('../images/deco/1.png',0,0,350,200,0,0,350,200);
ctx.fillStyle= "#FFFF00";
	ctx.fillRect(0,0,100,100);
	
var random_color_all = Math.floor(Math.random() * 16777215).toString(16);
    random_color_all = "#" + ("000000" + random_color_all).slice(-6);
	ctx.globalCompositeOperation="lighter";
	ctx.fillStyle= random_color_all;
	ctx.fillRect(0,0,canvas_w,canvas_h);
}
/*-------------------------------------------------Draw_A End-------------------------------------------------*/
/*---------------------------------------------------Draw_B---------------------------------------------------*/
function draw_b() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle= "#000000";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	var fade_color1 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color1 = "#" + ("000000" + fade_color1).slice(-6);
	var fade_color2 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color2 = "#" + ("000000" + fade_color2).slice(-6);
	var fade_color3 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color3 = "#" + ("000000" + fade_color3).slice(-6);
	var fade_point = Math.floor(Math.random() * 2);
	var fade_x_1;
	var fade_x_2;
	var fade_y_1;
	var fade_y_2;
	if (fade_point>1) {fade_x_1 = Math.floor(Math.random() * canvas_w);fade_x_2 = Math.floor(Math.random() * canvas_w);fade_y_1 = 0;fade_y_2 = canvas_h;}
	else {fade_x_1 = 0;fade_x_2 = canvas_w;fade_y_1 = Math.floor(Math.random() * canvas_h);fade_y_2 = Math.floor(Math.random() * canvas_h);}
	var my_gradient=ctx.createLinearGradient(fade_x_1,fade_y_1,fade_x_2,fade_y_2);
		my_gradient.addColorStop(0,fade_color1);
		my_gradient.addColorStop(0.5,fade_color2);
		my_gradient.addColorStop(1,fade_color3);
	for (var draw_whiteline_time = 0;draw_whiteline_time<32;draw_whiteline_time++) {
		var a1y=Math.floor(Math.random()*canvas_h);
		var a1y_vary=Math.floor(Math.random()*canvas_h);
		var a1y_up=a1y-a1y_vary;
		var a1y_down=a1y+a1y_vary;
		var a1y_width=Math.floor(Math.random()*canvas_max/160);
		ctx.beginPath();
		ctx.lineWidth=a1y_width;
		ctx.strokeStyle=my_gradient;
		ctx.moveTo(0,a1y);ctx.quadraticCurveTo(canvas_w/10,a1y_up,2*canvas_w/10,a1y);ctx.stroke();
		ctx.beginPath();ctx.moveTo(2*canvas_w/10,a1y);ctx.quadraticCurveTo(3*canvas_w/10,a1y_down,4*canvas_w/10,a1y);ctx.stroke();
		ctx.beginPath();ctx.moveTo(4*canvas_w/10,a1y);ctx.quadraticCurveTo(5*canvas_w/10,a1y_up,6*canvas_w/10,a1y);ctx.stroke();
		ctx.beginPath();ctx.moveTo(6*canvas_w/10,a1y);ctx.quadraticCurveTo(7*canvas_w/10,a1y_down,8*canvas_w/10,a1y);ctx.stroke();
		ctx.beginPath();ctx.moveTo(8*canvas_w/10,a1y);ctx.quadraticCurveTo(9*canvas_w/10,a1y_up,10*canvas_w/10,a1y);ctx.stroke();
	}
}
/*-------------------------------------------------Draw_B End-------------------------------------------------*/
/*---------------------------------------------------Draw_C---------------------------------------------------*/
function draw_c() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	for (var random_point_x = 0; random_point_x<canvas_w/64+1;random_point_x++) {
		for (var random_point_y = 0; random_point_y<canvas_h/64+1;random_point_y++) {
			var position_x=random_point_x*64;
			var position_y=random_point_y*64;
			var random_exist = Math.random();
			if(random_exist>0.5){
			ctx.beginPath();
			ctx.moveTo(position_x,position_y-24); 
			ctx.lineTo(position_x-24,position_y);
			ctx.lineTo(position_x,position_y+24);
			ctx.lineTo(position_x+24,position_y);
			ctx.lineTo(position_x,position_y-24);
			var random_bw = Math.floor(Math.random()*16777215).toString(16);
    		random_bw = "#" + ("000000" + random_bw).slice(-6);
			ctx.fillStyle=random_bw;
			ctx.fill();
			}
		}
	}
	for (var random_point_x2 = 0; random_point_x2<canvas_w/64+1;random_point_x2++) {
		for (var random_point_y2 = 0; random_point_y2<canvas_h/64+1;random_point_y2++) {
			var position_x2=random_point_x2*64+32;
			var position_y2=random_point_y2*64+32;
			ctx.beginPath();
			ctx.moveTo(position_x2,position_y2-24); 
			ctx.lineTo(position_x2-24,position_y2);
			ctx.lineTo(position_x2,position_y2+24);
			ctx.lineTo(position_x2+24,position_y2);
			ctx.lineTo(position_x2,position_y2-24);
			var random_bw2 = Math.floor(Math.random()*16777215).toString(16);
    		random_bw2 = "#" + ("000000" + random_bw2).slice(-6);
			ctx.fillStyle=random_bw2;
			ctx.fill();
		}
	}
	for (var random_point_x3 = 0; random_point_x3<canvas_w/64+1;random_point_x3++) {
		for (var random_point_y3 = 0; random_point_y3<canvas_h/64+1;random_point_y3++) {
			var position_x3=random_point_x3*64+32;
			var position_y3=random_point_y3*64+32;
			var random_exist2 = Math.random();
			if(random_exist2>0.5){
			ctx.beginPath();
			ctx.moveTo(position_x3,position_y3-16); 
			ctx.lineTo(position_x3-16,position_y3);
			ctx.lineTo(position_x3,position_y3+16);
			ctx.lineTo(position_x3+16,position_y3);
			ctx.lineTo(position_x3,position_y3-16);
			ctx.fillStyle="black";
			ctx.fill();
			}
			else{
			ctx.beginPath();
			ctx.moveTo(position_x3,position_y3-24); 
			ctx.lineTo(position_x3-24,position_y3);
			ctx.lineTo(position_x3,position_y3+24);
			ctx.lineTo(position_x3+24,position_y3);
			ctx.lineTo(position_x3,position_y3-24);
			ctx.fillStyle="black";
			ctx.fill();
			}
		}
	}

}
/*-------------------------------------------------Draw_C End-------------------------------------------------*/
/*---------------------------------------------------Draw_D---------------------------------------------------*/
function draw_d() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var random_bg = Math.floor(Math.random() * 16777215).toString(16);
    	random_bg = "#" + ("000000" + random_bg).slice(-6);
	ctx.fillStyle=random_bg;
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
var random_color1 = Math.floor(Math.random() * 16777215).toString(16);
    random_color1 = "#" + ("000000" + random_color1).slice(-6);
var random_color2 = Math.floor(Math.random() * 16777215).toString(16);
    random_color2 = "#" + ("000000" + random_color2).slice(-6);
var random_color3 = Math.floor(Math.random() * 16777215).toString(16);
    random_color3 = "#" + ("000000" + random_color3).slice(-6);
	
	for (var random_point_x = 0; random_point_x<1024;random_point_x++) {
	ctx.beginPath();
	ctx.moveTo(Math.floor(Math.random()*canvas_max*2-canvas_max/2),Math.floor(Math.random()*canvas_max*2-canvas_max/2));
	ctx.quadraticCurveTo(Math.floor(Math.random()*canvas_max*2-canvas_max/2),Math.floor(Math.random()*canvas_max*2-canvas_max/2),Math.floor(Math.random()*canvas_max*2-canvas_max/2),Math.floor(Math.random()*canvas_max*2-canvas_max/2));
	var random_width = Math.floor(Math.random()*canvas_min/160);
	var random_num = Math.floor(Math.random()*3);
	var random_color_end;
	if (random_num>1) {random_color_end = random_color1;}
	else if (random_num>2) {random_color_end = random_color2;}
	else {random_color_end = random_color3;}
	ctx.strokeStyle=random_color_end;
	ctx.lineWidth=random_width;
	ctx.stroke();
}
}
/*-------------------------------------------------Draw_D End-------------------------------------------------*/
/*---------------------------------------------------Draw_E---------------------------------------------------*/
function draw_e() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
ctx.globalCompositeOperation="xor";	
for (var random_point_x = 0; random_point_x<32;random_point_x++) {
var random_color = Math.floor(Math.random() * 16777215).toString(16);
    random_color = "#" + ("000000" + random_color).slice(-6);
ctx.beginPath();
ctx.arc(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w/2),0,2*Math.PI);
ctx.fillStyle=random_color;
ctx.fill();
}
}
/*-------------------------------------------------Draw_E End-------------------------------------------------*/
/*---------------------------------------------------Draw_F---------------------------------------------------*/
function draw_f() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var random_bg_h = Math.floor(Math.random() * 360);
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
for (var draw_time = 0; draw_time<512;draw_time++) {
var random_color_h = (Math.random()-0.5)*120+random_bg_h;
var random_color_s = Math.floor(Math.random() * 50+50);
var random_color_l = Math.floor(Math.random() * 50+50);
var random_color_hsl = "hsl(" + random_color_h + "," + random_color_s + "%," + random_color_l + "%)";
ctx.globalAlpha=0.5;
ctx.beginPath();
ctx.arc(canvas_w/2,canvas_h/2,Math.floor(Math.random()*canvas_max),Math.random()*2*Math.PI,Math.random()*2*Math.PI);
ctx.lineWidth=Math.floor(Math.random()*canvas_max/10);
ctx.strokeStyle=random_color_hsl;
ctx.stroke();
}
}
/*-------------------------------------------------Draw_F End-------------------------------------------------*/
/*---------------------------------------------------Draw_G---------------------------------------------------*/
function draw_g() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
var random_color_h = Math.floor(Math.random() * 360);
for (var draw_time_all = 0; draw_time_all<6;draw_time_all++) {
var draw_time_all2 = canvas_max/160+1;
for (var draw_time1 = 0; draw_time1<draw_time_all2;draw_time1++) {
var random_color1_s = Math.floor(Math.random() * 30+70);
var random_color1_l = Math.floor(Math.random() * 50+50);
var random_color1_hsl = "hsl(" + random_color_h + "," + random_color1_s + "%," + random_color1_l + "%)";
ctx.beginPath();
ctx.moveTo(draw_time1*canvas_min/10,2*draw_time_all*Math.sqrt(3)*canvas_min/20);
ctx.lineTo(draw_time1*canvas_min/10+canvas_min/10,draw_time_all*2*Math.sqrt(3)*canvas_min/20);
ctx.lineTo(draw_time1*canvas_min/10+canvas_min/20,draw_time_all*2*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/20);
ctx.closePath();
ctx.fillStyle=random_color1_hsl;
ctx.fill();
}
for (var draw_time2 = 0; draw_time2<draw_time_all2;draw_time2++) {
var random_color2_s = Math.floor(Math.random() * 30+70);
var random_color2_l = Math.floor(Math.random() * 50+50);
var random_color2_hsl = "hsl(" + random_color_h + "," + random_color2_s + "%," + random_color2_l + "%)";
ctx.beginPath();
ctx.moveTo(draw_time2*canvas_min/10,draw_time_all*2*Math.sqrt(3)*canvas_min/20);
ctx.lineTo(draw_time2*canvas_min/10-canvas_min/20,draw_time_all*2*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/20);
ctx.lineTo(draw_time2*canvas_min/10+canvas_min/20,draw_time_all*2*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/20);
ctx.closePath();
ctx.fillStyle=random_color2_hsl;
ctx.fill();
}
for (var draw_time3 = 0; draw_time3<draw_time_all2;draw_time3++) {
var random_color3_s = Math.floor(Math.random() * 30+70);
var random_color3_l = Math.floor(Math.random() * 50+50);
var random_color3_hsl = "hsl(" + random_color_h + "," + random_color3_s + "%," + random_color3_l + "%)";
ctx.beginPath();
ctx.moveTo(draw_time3*canvas_min/10-canvas_min/20,draw_time_all*2*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/20);
ctx.lineTo(draw_time3*canvas_min/10+canvas_min/20,draw_time_all*2*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/20);
ctx.lineTo(draw_time3*canvas_min/10,2*draw_time_all*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/10);
ctx.closePath();
ctx.fillStyle=random_color3_hsl;
ctx.fill();
}
for (var draw_time4 = 0; draw_time4<draw_time_all2;draw_time4++) {
var random_color4_s = Math.floor(Math.random() * 30+70);
var random_color4_l = Math.floor(Math.random() * 50+50);
var random_color4_hsl = "hsl(" + random_color_h + "," + random_color4_s + "%," + random_color4_l + "%)";
ctx.beginPath();
ctx.moveTo(draw_time4*canvas_min/10+canvas_min/20,draw_time_all*2*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/20);
ctx.lineTo(draw_time4*canvas_min/10,2*draw_time_all*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/10);
ctx.lineTo(draw_time4*canvas_min/10+canvas_min/10,2*draw_time_all*Math.sqrt(3)*canvas_min/20+Math.sqrt(3)*canvas_min/10);
ctx.closePath();
ctx.fillStyle=random_color4_hsl;
ctx.fill();
}
}
}
/*-------------------------------------------------Draw_G End-------------------------------------------------*/
/*---------------------------------------------------Draw_H---------------------------------------------------*/
function draw_h() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
	//Random Background
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
for (var draw_time_all = 0; draw_time_all<2;draw_time_all++) {
var random_color = Math.floor(Math.random() * 16777215).toString(16);
    random_color = "#" + ("000000" + random_color).slice(-6);
var ax = -canvas_w/2;
var ay = Math.floor(Math.random() * canvas_h*2);
var bx = Math.floor(Math.random() * canvas_w*2);
var by = Math.floor(Math.random() * canvas_h*2);
var cx = Math.floor(Math.random() * canvas_w*2);
var cy = Math.floor(Math.random() * canvas_h*2);
var dx = canvas_w*2-canvas_w/2;
var dy = Math.floor(Math.random() * canvas_h*2);
var calculate_ay = Math.floor(Math.random()-0.5)*2;
var calculate_bx = Math.floor(Math.random()-0.5)*2;
var calculate_by = Math.floor(Math.random()-0.5)*2;
var calculate_cx = Math.floor(Math.random()-0.5)*2;
var calculate_cy = Math.floor(Math.random()-0.5)*2;
var calculate_dy = Math.floor(Math.random()-0.5)*2;
for (var draw_time = 0; draw_time<64;draw_time++) {
ay = ay + draw_time*calculate_ay;
bx = bx + draw_time*calculate_bx;
by = by + draw_time*calculate_by;
cx = cx + draw_time*calculate_cx;
cy = cy + draw_time*calculate_cy;
dy = dy + draw_time*calculate_dy;
ctx.beginPath();
ctx.moveTo(ax,ay);
ctx.bezierCurveTo(bx,by,cx,cy,dx,dy);
ctx.strokeStyle = random_color;
ctx.stroke();
}
}
}
/*-------------------------------------------------Draw_H End-------------------------------------------------*/
/*---------------------------------------------------Draw_I---------------------------------------------------*/
function draw_i() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var random_bg_h = Math.floor(Math.random() * 360);
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
for (var draw_time = 0; draw_time<64;draw_time++) {
var random_color_h = (Math.random()-0.5)*30+random_bg_h;
var random_color_s = Math.floor(Math.random() * 50+50);
var random_color_l = Math.floor(Math.random() * 50+50);
var random_color_hsl = "hsl(" + random_color_h + "," + random_color_s + "%," + random_color_l + "%)";
ctx.beginPath();
ctx.arc(canvas_w/2,canvas_h/2,Math.floor(Math.random()*canvas_max/4),0,2*Math.PI);
ctx.lineWidth=Math.floor(Math.random()*canvas_max/10);
ctx.strokeStyle=random_color_hsl;
ctx.stroke();
}
}
/*-------------------------------------------------Draw_I End-------------------------------------------------*/
/*---------------------------------------------------Draw_J---------------------------------------------------*/
function draw_j() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
var random_bg_h = Math.floor(Math.random()*360);
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
for (var draw_time = 12; draw_time>0;draw_time--) {
var random_color_h = (Math.random()-0.5)*30+random_bg_h;
var random_color_s = Math.floor(Math.random() * 50+50);
var random_color_l = Math.floor(Math.random() * 50+50);
var random_color_hsl = "hsl(" + random_color_h + "," + random_color_s + "%," + random_color_l + "%)";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.arc(0,0,draw_time*canvas_max/10,0,Math.PI/2);
ctx.shadowBlur=canvas_max/64;
ctx.shadowColor="black";
ctx.fillStyle=random_color_hsl;
ctx.fill();
}
}
/*-------------------------------------------------Draw_J End-------------------------------------------------*/
/*---------------------------------------------------Draw_K---------------------------------------------------*/
function draw_k() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
	//Random Background
	ctx.fillStyle="white";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
var deg =Math.floor(Math.random() * 180)-90;
ctx.translate(canvas_w/2,canvas_h/2);
ctx.rotate(deg*Math.PI/180);
ctx.translate(-canvas_w/2,-canvas_h/2);
var random_bg_h = Math.floor(Math.random() * 360);
for (var draw_time = 0; draw_time<512;draw_time++) {
var random_color_h = (Math.random()-0.5)*60+random_bg_h;
var random_color_s = Math.floor(Math.random() * 50+50);
var random_color_l = Math.floor(Math.random() * 50+50);
var random_color_hsl = "hsl(" + random_color_h + "," + random_color_s + "%," + random_color_l + "%)";
ctx.globalAlpha=Math.random();
ctx.fillStyle=random_color_hsl;
	ctx.fillRect(Math.floor(Math.random()*canvas_w*2)-canvas_w/2,Math.floor(Math.random()*canvas_h*2)-canvas_h/2,Math.floor(Math.random()*canvas_w*4),Math.floor(Math.random()*canvas_h/64+canvas_h/32));
}
ctx.translate(canvas_w/2,canvas_h/2);
ctx.rotate(-deg*Math.PI/180);
ctx.translate(-canvas_w/2,-canvas_h/2);
}
/*-------------------------------------------------Draw_K End-------------------------------------------------*/
/*---------------------------------------------------Draw_L---------------------------------------------------*/
function draw_l() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle="#F0F0F0";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
var a1x=0,a1y=0;
var a2x=canvas_max/10,a2y=0;
var a3x=2*canvas_max/10,a3y=0;
var a4x=3*canvas_max/10,a4y=0;
var a5x=4*canvas_max/10,a5y=0;
var a6x=5*canvas_max/10,a6y=0;
var a7x=6*canvas_max/10,a7y=0;
var a8x=7*canvas_max/10,a8y=0;
var a9x=8*canvas_max/10,a9y=0;
var a10x=9*canvas_max/10,a10y=0;
var a11x=10*canvas_max/10,a11y=0;

for (var draw_time=0;draw_time<11;draw_time++) {
var b1x=0,b1y=Math.floor(Math.random()*canvas_h/10)+canvas_h/20+draw_time*canvas_h/10;
var b2x=Math.floor(Math.random()*canvas_max/10)+canvas_max/20,b2y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b3x=Math.floor(Math.random()*canvas_max/10)+3*canvas_max/20,b3y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b4x=Math.floor(Math.random()*canvas_max/10)+5*canvas_max/20,b4y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b5x=Math.floor(Math.random()*canvas_max/10)+7*canvas_max/20,b5y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b6x=Math.floor(Math.random()*canvas_max/10)+9*canvas_max/20,b6y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b7x=Math.floor(Math.random()*canvas_max/10)+11*canvas_max/20,b7y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b8x=Math.floor(Math.random()*canvas_max/10)+13*canvas_max/20,b8y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b9x=Math.floor(Math.random()*canvas_max/10)+15*canvas_max/20,b9y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b10x=Math.floor(Math.random()*canvas_max/10)+17*canvas_max/20,b10y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var b11x=canvas_max,b11y=Math.floor(Math.random()*canvas_max/20)+canvas_max/20+draw_time*canvas_max/10;
var value1 = Math.random()*2;var value2 = Math.random()*2;
var value3 = Math.random()*2;var value4 = Math.random()*2;
var value5 = Math.random()*2;var value6 = Math.random()*2;
var value7 = Math.random()*2;var value8 = Math.random()*2;
var value9 = Math.random()*2;var value10 = Math.random()*2;
var random_color1 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color1 = "#" + ("000000" + random_color1).slice(-6);
var random_color2 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color2 = "#" + ("000000" + random_color2).slice(-6);
var random_color3 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color3 = "#" + ("000000" + random_color3).slice(-6);
var random_color4 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color4 = "#" + ("000000" + random_color4).slice(-6);
var random_color5 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color5 = "#" + ("000000" + random_color5).slice(-6);
var random_color6 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color6 = "#" + ("000000" + random_color6).slice(-6);
var random_color7 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color7 = "#" + ("000000" + random_color7).slice(-6);
var random_color8 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color8 = "#" + ("000000" + random_color8).slice(-6);
var random_color9 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color9 = "#" + ("000000" + random_color9).slice(-6);
var random_color0 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color0 = "#" + ("000000" + random_color0).slice(-6);
var random_color11 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color11 = "#" + ("000000" + random_color11).slice(-6);
var random_color12 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color12 = "#" + ("000000" + random_color12).slice(-6);
var random_color13 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color13 = "#" + ("000000" + random_color13).slice(-6);
var random_color14 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color14 = "#" + ("000000" + random_color14).slice(-6);
var random_color15 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color15 = "#" + ("000000" + random_color15).slice(-6);
var random_color16 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color16 = "#" + ("000000" + random_color16).slice(-6);
var random_color17 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color17 = "#" + ("000000" + random_color17).slice(-6);
var random_color18 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color18 = "#" + ("000000" + random_color18).slice(-6);
var random_color19 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color19 = "#" + ("000000" + random_color19).slice(-6);
var random_color10 = (Math.floor(Math.random()*10+5)*1118481).toString(16);
    random_color10 = "#" + ("000000" + random_color10).slice(-6);
if (value1>1){
ctx.beginPath();ctx.moveTo(a1x,a1y);ctx.lineTo(b1x,b1y);ctx.lineTo(a2x,a2y);ctx.closePath();
ctx.fillStyle=random_color1;ctx.fill();
ctx.beginPath();ctx.moveTo(a2x,a2y);ctx.lineTo(b2x,b2y);ctx.lineTo(b1x,b1y);ctx.closePath();
ctx.fillStyle=random_color2;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a1x,a1y);ctx.lineTo(b1x,b1y);ctx.lineTo(b2x,b2y);ctx.closePath();
ctx.fillStyle=random_color1;ctx.fill();
ctx.beginPath();ctx.moveTo(a2x,a2y);ctx.lineTo(b2x,b2y);ctx.lineTo(a1x,a1y);ctx.closePath();
ctx.fillStyle=random_color2;ctx.fill();}
if (value2>1){
ctx.beginPath();ctx.moveTo(a2x,a2y);ctx.lineTo(b2x,b2y);ctx.lineTo(a3x,a3y);ctx.closePath();
ctx.fillStyle=random_color3;ctx.fill();
ctx.beginPath();ctx.moveTo(a3x,a3y);ctx.lineTo(b3x,b3y);ctx.lineTo(b2x,b2y);ctx.closePath();
ctx.fillStyle=random_color4;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a2x,a2y);ctx.lineTo(b2x,b2y);ctx.lineTo(b3x,b3y);ctx.closePath();
ctx.fillStyle=random_color3;ctx.fill();
ctx.beginPath();ctx.moveTo(a3x,a3y);ctx.lineTo(b3x,b3y);ctx.lineTo(a2x,a2y);ctx.closePath();
ctx.fillStyle=random_color4;ctx.fill();}
if (value3>1){
ctx.beginPath();ctx.moveTo(a3x,a3y);ctx.lineTo(b3x,b3y);ctx.lineTo(a4x,a4y);ctx.closePath();
ctx.fillStyle=random_color5;ctx.fill();
ctx.beginPath();ctx.moveTo(a4x,a4y);ctx.lineTo(b4x,b4y);ctx.lineTo(b3x,b3y);ctx.closePath();
ctx.fillStyle=random_color6;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a3x,a3y);ctx.lineTo(b3x,b3y);ctx.lineTo(b4x,b4y);ctx.closePath();
ctx.fillStyle=random_color5;ctx.fill();
ctx.beginPath();ctx.moveTo(a4x,a4y);ctx.lineTo(b4x,b4y);ctx.lineTo(a3x,a3y);ctx.closePath();
ctx.fillStyle=random_color6;ctx.fill();}
if (value4>1){
ctx.beginPath();ctx.moveTo(a4x,a4y);ctx.lineTo(b4x,b4y);ctx.lineTo(a5x,a5y);ctx.closePath();
ctx.fillStyle=random_color7;ctx.fill();
ctx.beginPath();ctx.moveTo(a5x,a5y);ctx.lineTo(b5x,b5y);ctx.lineTo(b4x,b4y);ctx.closePath();
ctx.fillStyle=random_color8;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a4x,a4y);ctx.lineTo(b4x,b4y);ctx.lineTo(b5x,b5y);ctx.closePath();
ctx.fillStyle=random_color7;ctx.fill();
ctx.beginPath();ctx.moveTo(a5x,a5y);ctx.lineTo(b5x,b5y);ctx.lineTo(a4x,a4y);ctx.closePath();
ctx.fillStyle=random_color8;ctx.fill();}
if (value5>1){
ctx.beginPath();ctx.moveTo(a5x,a5y);ctx.lineTo(b5x,b5y);ctx.lineTo(a6x,a6y);ctx.closePath();
ctx.fillStyle=random_color9;ctx.fill();
ctx.beginPath();ctx.moveTo(a6x,a6y);ctx.lineTo(b6x,b6y);ctx.lineTo(b5x,b5y);ctx.closePath();
ctx.fillStyle=random_color0;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a5x,a5y);ctx.lineTo(b5x,b5y);ctx.lineTo(b6x,b6y);ctx.closePath();
ctx.fillStyle=random_color9;ctx.fill();
ctx.beginPath();ctx.moveTo(a6x,a6y);ctx.lineTo(b6x,b6y);ctx.lineTo(a5x,a5y);ctx.closePath();
ctx.fillStyle=random_color0;ctx.fill();}
if (value6>1){
ctx.beginPath();ctx.moveTo(a6x,a6y);ctx.lineTo(b6x,b6y);ctx.lineTo(a7x,a7y);ctx.closePath();
ctx.fillStyle=random_color11;ctx.fill();
ctx.beginPath();ctx.moveTo(a7x,a7y);ctx.lineTo(b7x,b7y);ctx.lineTo(b6x,b6y);ctx.closePath();
ctx.fillStyle=random_color12;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a6x,a6y);ctx.lineTo(b6x,b6y);ctx.lineTo(b7x,b7y);ctx.closePath();
ctx.fillStyle=random_color11;ctx.fill();
ctx.beginPath();ctx.moveTo(a7x,a7y);ctx.lineTo(b7x,b7y);ctx.lineTo(a6x,a6y);ctx.closePath();
ctx.fillStyle=random_color12;ctx.fill();}
if (value7>1){
ctx.beginPath();ctx.moveTo(a7x,a7y);ctx.lineTo(b7x,b7y);ctx.lineTo(a8x,a8y);ctx.closePath();
ctx.fillStyle=random_color13;ctx.fill();
ctx.beginPath();ctx.moveTo(a8x,a8y);ctx.lineTo(b8x,b8y);ctx.lineTo(b7x,b7y);ctx.closePath();
ctx.fillStyle=random_color14;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a7x,a7y);ctx.lineTo(b7x,b7y);ctx.lineTo(b8x,b8y);ctx.closePath();
ctx.fillStyle=random_color13;ctx.fill();
ctx.beginPath();ctx.moveTo(a8x,a8y);ctx.lineTo(b8x,b8y);ctx.lineTo(a7x,a7y);ctx.closePath();
ctx.fillStyle=random_color14;ctx.fill();}
if (value8>1){
ctx.beginPath();ctx.moveTo(a8x,a8y);ctx.lineTo(b8x,b8y);ctx.lineTo(a9x,a9y);ctx.closePath();
ctx.fillStyle=random_color15;ctx.fill();
ctx.beginPath();ctx.moveTo(a9x,a9y);ctx.lineTo(b9x,b9y);ctx.lineTo(b8x,b8y);ctx.closePath();
ctx.fillStyle=random_color16;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a8x,a8y);ctx.lineTo(b8x,b8y);ctx.lineTo(b9x,b9y);ctx.closePath();
ctx.fillStyle=random_color15;ctx.fill();
ctx.beginPath();ctx.moveTo(a9x,a9y);ctx.lineTo(b9x,b9y);ctx.lineTo(a8x,a8y);ctx.closePath();
ctx.fillStyle=random_color16;ctx.fill();}
if (value9>1){
ctx.beginPath();ctx.moveTo(a9x,a9y);ctx.lineTo(b9x,b9y);ctx.lineTo(a10x,a10y);ctx.closePath();
ctx.fillStyle=random_color17;ctx.fill();
ctx.beginPath();ctx.moveTo(a10x,a10y);ctx.lineTo(b10x,b10y);ctx.lineTo(b9x,b9y);ctx.closePath();
ctx.fillStyle=random_color18;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a9x,a9y);ctx.lineTo(b9x,b9y);ctx.lineTo(b10x,b10y);ctx.closePath();
ctx.fillStyle=random_color17;ctx.fill();
ctx.beginPath();ctx.moveTo(a10x,a10y);ctx.lineTo(b10x,b10y);ctx.lineTo(a9x,a9y);ctx.closePath();
ctx.fillStyle=random_color18;ctx.fill();}
if (value10>1){
ctx.beginPath();ctx.moveTo(a10x,a10y);ctx.lineTo(b10x,b10y);ctx.lineTo(a11x,a11y);ctx.closePath();
ctx.fillStyle=random_color19;ctx.fill();
ctx.beginPath();ctx.moveTo(a11x,a11y);ctx.lineTo(b11x,b11y);ctx.lineTo(b10x,b10y);ctx.closePath();
ctx.fillStyle=random_color10;ctx.fill();}
else {
ctx.beginPath();ctx.moveTo(a10x,a10y);ctx.lineTo(b10x,b10y);ctx.lineTo(b11x,b11y);ctx.closePath();
ctx.fillStyle=random_color19;ctx.fill();
ctx.beginPath();ctx.moveTo(a11x,a11y);ctx.lineTo(b11x,b11y);ctx.lineTo(a10x,a10y);ctx.closePath();
ctx.fillStyle=random_color10;ctx.fill();}

a1x=b1x;a1y=b1y;a2x=b2x;a2y=b2y;a3x=b3x;a3y=b3y;
a4x=b4x;a4y=b4y;a5x=b5x;a5y=b5y;a6x=b6x;a6y=b6y;
a7x=b7x;a7y=b7y;a8x=b8x;a8y=b8y;a9x=b9x;a9y=b9y;
a10x=b10x;a10y=b10y;a11x=b11x;a11y=b11y;
}
ctx.globalAlpha=0.6;
var fade_color1 = Math.floor(Math.random() * 16777215).toString(16);
    fade_color1 = "#" + ("000000" + fade_color1).slice(-6);
var fade_color2 = Math.floor(Math.random() * 16777215).toString(16);
    fade_color2 = "#" + ("000000" + fade_color2).slice(-6);
var fade_color3 = Math.floor(Math.random() * 16777215).toString(16);
    fade_color3 = "#" + ("000000" + fade_color3).slice(-6);
var my_gradient=ctx.createLinearGradient(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h/10)-canvas_h/10,Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h/10)+canvas_h);
		my_gradient.addColorStop(0,fade_color1);
		my_gradient.addColorStop(0.5,fade_color2);
		my_gradient.addColorStop(1,fade_color3);
		ctx.fillStyle="#FFFFFF";
		ctx.fillRect(0,0,canvas_w,canvas_h);
		ctx.globalAlpha=0.75;
		ctx.fillStyle=my_gradient;
		ctx.fillRect(0,0,canvas_w,canvas_h);
}
/*-------------------------------------------------Draw_L End-------------------------------------------------*/
/*---------------------------------------------------Draw_M---------------------------------------------------*/
function draw_m() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
var random_bg_h = Math.floor(Math.random() * 360);
var draw_time1_all = 20;
for (var draw_time1 = 0;draw_time1<draw_time1_all;draw_time1++) {
var pointa = Math.floor(Math.random()*canvas_w/4+canvas_w*3/8);
var pointb = Math.floor(Math.random()*(canvas_h/2/draw_time1_all*draw_time1));
var pointc = Math.floor(Math.random()*canvas_w/4+canvas_w*3/8);
var pointd = Math.floor(Math.random()*(canvas_h/2/draw_time1_all*draw_time1));
var random_color_h = (Math.random()-0.5)*30+random_bg_h;
var random_color_s = Math.floor(Math.random() * 50+50);
var random_color_l = Math.floor(Math.random() * 50+50);
var random_color_hsl = "hsl(" + random_color_h + "," + random_color_s + "%," + random_color_l + "%)";
var draw_time2_all = Math.floor(Math.random() * 18+4);
var rotate_time = 360/draw_time2_all;
for (var draw_time2 = 0;draw_time2<draw_time2_all;draw_time2++) {
ctx.beginPath();
ctx.moveTo(canvas_w/2,canvas_h/2);
ctx.bezierCurveTo(pointa,pointb,pointc,pointd,canvas_w/2,(draw_time1+3)*canvas_h/2/draw_time1_all);
ctx.bezierCurveTo(canvas_w-pointa,pointb,canvas_w-pointc,pointd,canvas_w/2,canvas_h/2);
ctx.fillStyle=random_color_hsl;
ctx.lineWidth=1;
ctx.fill();
ctx.translate(canvas_w/2,canvas_h/2);
ctx.rotate(rotate_time*Math.PI/180);
ctx.translate(-canvas_w/2,-canvas_h/2);
}
}
}
/*-------------------------------------------------Draw_M End-------------------------------------------------*/
/*---------------------------------------------------Draw_N---------------------------------------------------*/
function draw_n() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	var random_color1 = (Math.floor(Math.random()*16777215)).toString(16);
	random_color1 = "#" + ("000000" + random_color1).slice(-6);
	var random_color2 = (Math.floor(Math.random()*16777215)).toString(16);
	random_color2 = "#" + ("000000" + random_color2).slice(-6);
	var grd = ctx.createRadialGradient(canvas_w/2,canvas_h/2,5,canvas_w/2,canvas_h/2,400);
	grd.addColorStop(0,random_color1);
	grd.addColorStop(1,random_color2);
for(var draw_time=0;draw_time<32;draw_time++){
ctx.lineWidth=draw_time*0.8;
ctx.beginPath();
var r = draw_time*canvas_max/48;
ctx.arc(canvas_w/2,canvas_h/2,r,0,2*Math.PI);
ctx.strokeStyle = grd;
ctx.stroke();
}
	
}
/*-------------------------------------------------Draw_N End-------------------------------------------------*/
/*---------------------------------------------------Draw_O---------------------------------------------------*/
function draw_o() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
	//Random Background
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas_w,canvas_h);
	ctx.globalAlpha=0.5;
	var random_bg = Math.floor(Math.random() * 16777215).toString(16);
    	random_bg = "#" + ("000000" + random_bg).slice(-6);
	ctx.fillStyle=random_bg;
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	var random_color = (Math.floor(Math.random()*16777215)).toString(16);
	random_color = "#" + ("000000" + random_color).slice(-6);
	ctx.globalAlpha=0.5;
for(var draw_time=0;draw_time<5;draw_time++){
var width = Math.floor(Math.random()*canvas_w/20+canvas_w/20);
var x1 = Math.floor(Math.random()*canvas_w);
var x2 = Math.floor(Math.random()*canvas_w);
ctx.beginPath();
ctx.moveTo(x1,0);
ctx.lineTo(x1+width,0);
ctx.lineTo(x2+width,canvas_h);
ctx.lineTo(x2,canvas_h);
ctx.closePath();
ctx.fillStyle = random_color;
ctx.fill();
}
for(var draw_time2=0;draw_time2<5;draw_time2++){
var height = Math.floor(Math.random()*canvas_h/20+canvas_h/20);
var y1 = Math.floor(Math.random()*canvas_h);
var y2 = Math.floor(Math.random()*canvas_h);
ctx.beginPath();
ctx.moveTo(0,y1);
ctx.lineTo(0,y1+height);
ctx.lineTo(canvas_w,y2+height);
ctx.lineTo(canvas_w,y2);
ctx.closePath();
ctx.fillStyle = random_color;
ctx.fill();
}
}
/*-------------------------------------------------Draw_O End-------------------------------------------------*/
/*---------------------------------------------------Draw_P---------------------------------------------------*/
function draw_p() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var bg_num = Math.random();
	if(bg_num>0.5){
	var fade_color1 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color1 = "#" + ("000000" + fade_color1).slice(-6);
	var fade_color2 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color2 = "#" + ("000000" + fade_color2).slice(-6);
	var my_gradient=ctx.createLinearGradient(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h));
		my_gradient.addColorStop(0,fade_color1);
		my_gradient.addColorStop(1,fade_color2);
		ctx.fillStyle=my_gradient;
		ctx.fillRect(0,0,canvas_w,canvas_h);
	}
	else{
	var random_bg = Math.floor(Math.random() * 16777215).toString(16);
    	random_bg = "#" + ("000000" + random_bg).slice(-6);
	ctx.fillStyle=random_bg;
	ctx.fillRect(0,0,canvas_w,canvas_h);
	}
//Random Drawing
	//line
	ctx.lineCap = "round";
	var draw_line_time_all = Math.floor(Math.random()*16);
	for(var draw_line_time=0;draw_line_time<draw_line_time_all;draw_line_time++) {
	var color_line = Math.floor(Math.random() * 16777215).toString(16);
		color_line = "#" + ("000000" + color_line).slice(-6);
		ctx.globalAlpha=Math.random()*1;
		ctx.lineWidth = Math.floor(Math.random()*10);
		ctx.beginPath();
		ctx.moveTo(Math.floor(Math.random()*canvas_w*2-canvas_w/2),Math.floor(Math.random()*canvas_h*2-canvas_h/2));
		ctx.lineTo(Math.floor(Math.random()*canvas_w*2-canvas_w/2),Math.floor(Math.random()*canvas_h*2-canvas_h/2));
		ctx.closePath();
		ctx.strokeStyle = color_line;
		ctx.stroke();
	}
	var draw_curve_time_all = Math.floor(Math.random()*8);
	for(var draw_curve_time=0;draw_curve_time<draw_curve_time_all;draw_curve_time++) {
		var curve_line = Math.floor(Math.random() * 16777215).toString(16);
			curve_line = "#" + ("000000" + curve_line).slice(-6);
		ctx.globalAlpha=Math.random()*1;
		ctx.lineWidth = Math.floor(Math.random()*10);
		ctx.moveTo(Math.floor(Math.random()*canvas_w*2-canvas_w/2),Math.floor(Math.random()*canvas_h*2-canvas_h/2));
		ctx.quadraticCurveTo(Math.floor(Math.random()*canvas_w*2-canvas_w/2),Math.floor(Math.random()*canvas_h*2-canvas_h/2),Math.floor(Math.random()*canvas_w*2-canvas_w/2),Math.floor(Math.random()*canvas_h*2-canvas_h/2));
		ctx.strokeStyle = curve_line;
		ctx.stroke();
	}
	ctx.lineCap = "butt";
	//circle
	var draw_circle_time_all = Math.floor(Math.random()*16);
	for(var draw_circle_time=0;draw_circle_time<draw_circle_time_all;draw_circle_time++){
		var draw_circle = Math.floor(Math.random() * 16777215).toString(16);
			draw_circle = "#" + ("000000" + draw_circle).slice(-6);
		var draw_circle_stroke = Math.floor(Math.random() * 16777215).toString(16);
			draw_circle_stroke = "#" + ("000000" + draw_circle_stroke).slice(-6);
		ctx.globalAlpha=Math.random()*1;
		ctx.lineWidth = Math.floor(Math.random()*10);
		ctx.beginPath();	ctx.arc(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_max/8),0,2*Math.PI);
		ctx.fillStyle=draw_circle;
		ctx.fill();
		var num = Math.random();
		if(num>0.5){ctx.strokeStyle=draw_circle_stroke;ctx.stroke();}
		else{}
	}
}
/*-------------------------------------------------Draw_P End-------------------------------------------------*/
/*---------------------------------------------------Draw_Q---------------------------------------------------*/
function draw_q() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var fade_color1 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color1 = "#" + ("000000" + fade_color1).slice(-6);
	var fade_color2 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color2 = "#" + ("000000" + fade_color2).slice(-6);
	var fade_x1 = Math.floor(Math.random()*canvas_w);
	var fade_x2 = Math.floor(Math.random()*canvas_w);
	var fade_y1 = Math.floor(Math.random()*canvas_h);
	var fade_y2 = Math.floor(Math.random()*canvas_h);
	var my_gradient=ctx.createLinearGradient(fade_x1,fade_y1,fade_x2,fade_y2);
		my_gradient.addColorStop(0,fade_color1);
		my_gradient.addColorStop(1,fade_color2);
		ctx.fillStyle=my_gradient;
		ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	var random_color = Math.floor(Math.random() * 16777215).toString(16);
    random_color = "#" + ("000000" + random_color).slice(-6);
	var chars = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","_","-","!","?","/","|","=","&","%"];
	
	
	var another_gradient=ctx.createLinearGradient(fade_x1,fade_y1,fade_x2,fade_y2);
		another_gradient.addColorStop(0,fade_color2);
		another_gradient.addColorStop(1,fade_color1);
	
	
	for(var draw_time=0;draw_time<canvas_h/32;draw_time++){
	var word1 = "";
	var word_num = Math.floor(Math.random()*canvas_w/16);
	for (var num=0;num<word_num;num++){
		var id = Math.floor(Math.random()*70);
		word1 += chars[id];
	}	
	ctx.font="32px Arial";
	ctx.fillStyle=another_gradient;
	ctx.fillText(word1,0,32+32*draw_time);
}
}
/*-------------------------------------------------Draw_Q End-------------------------------------------------*/
/*---------------------------------------------------Draw_R---------------------------------------------------*/
function draw_r() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var random_bg = Math.floor(Math.random() * 16777215).toString(16);
    	random_bg = "#" + ("000000" + random_bg).slice(-6);
	ctx.fillStyle=random_bg;
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
for(var draw_time=10;draw_time>0;draw_time--){
	ctx.shadowBlur=canvas_min/64;
	ctx.shadowColor="black";
	var random_color = Math.floor(Math.random() * 16777215).toString(16);
    random_color = "#" + ("000000" + random_color).slice(-6);
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(0,draw_time*canvas_h/10);
ctx.bezierCurveTo(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h/5+canvas_h/10*draw_time-canvas_h/10),Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h/5+canvas_h/10*draw_time-canvas_h/10),canvas_w,draw_time*canvas_h/10);
	ctx.lineTo(canvas_w,0);
	ctx.fillStyle=random_color;
	ctx.fill();
}
}
/*-------------------------------------------------Draw_R End-------------------------------------------------*/
/*---------------------------------------------------Draw_S---------------------------------------------------*/
function draw_s() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var random_color_h = Math.random()*360;
	var random_color_s = Math.floor(Math.random()*100);
	var random_color_l = Math.floor(Math.random()*50);
	var random_color_hsl = "hsl(" + random_color_h + "," + random_color_s + "%," + random_color_l + "%)";
	var random_bg = Math.floor(Math.random() * 3355443).toString(16);
    	random_bg = "#" + ("000000" + random_bg).slice(-6);
	ctx.fillStyle=random_color_hsl;
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	ctx.globalCompositeOperation="lighter";
	//random_column
	var random_column_num = Math.floor(Math.random()*16);
	for (var draw_column_time = 0;draw_column_time<random_column_num;draw_column_time++) {
		var random_column = Math.floor(Math.random() * 16777215).toString(16);
    		random_column = "#" + ("000000" + random_column).slice(-6);
			var random_column_position = Math.floor(Math.random()*(canvas_h/10))*10;
			ctx.fillStyle=random_column; 
			ctx.fillRect(0,random_column_position,canvas_w,10);
	}
	//random_row
	var random_row_num = Math.floor(Math.random()*16);
	for (var draw_row_time = 0;draw_row_time<random_row_num;draw_row_time++) {
		var random_row = Math.floor(Math.random() * 16777215).toString(16);
    		random_row = "#" + ("000000" + random_row).slice(-6);
		var random_row_position = Math.floor(Math.random()*(canvas_w/10))*10;
			ctx.fillStyle=random_row;
			ctx.fillRect(random_row_position,0,10,canvas_h);
	}
	//random_point
	var random_point_num =  Math.floor(Math.random()*16);
	for (var draw_random_point = 0;draw_random_point<random_point_num;draw_random_point++) {
				var random_point = Math.floor(Math.random() * 16777215).toString(16);
    				random_point = "#" + ("000000" + random_point).slice(-6);
				var point_position_x = Math.floor(Math.random()*canvas_w/10)*10;
				var point_position_y = Math.floor(Math.random()*canvas_h/10)*10;
					ctx.fillStyle=random_point;
					ctx.fillRect(point_position_x,point_position_y,10,10);
	}
	//random_suqare
	var random_suqare_num =  Math.floor(Math.random()*16);
	for (var draw_suqare_time = 0;draw_suqare_time<random_suqare_num;draw_suqare_time++) {
		var random_suqare = Math.floor(Math.random() * 16777215).toString(16);
    		random_suqare = "#" + ("000000" + random_suqare).slice(-6);
			ctx.fillStyle=random_suqare;
			ctx.fillRect((Math.floor(Math.random()*63)*10),(Math.floor(Math.random()*63)*10),(Math.floor(Math.random()*8)*10),(Math.floor(Math.random()*8)*10));
	}
}
/*-------------------------------------------------Draw_S End-------------------------------------------------*/
/*---------------------------------------------------Draw_T---------------------------------------------------*/
function draw_t() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var fade_color1 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color1 = "#" + ("000000" + fade_color1).slice(-6);
	var fade_color2 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color2 = "#" + ("000000" + fade_color2).slice(-6);
	var fade_color3 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color3 = "#" + ("000000" + fade_color3).slice(-6);
	var my_gradient=ctx.createLinearGradient(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h));
		my_gradient.addColorStop(0,fade_color1);
		my_gradient.addColorStop(0.5,fade_color2);
		my_gradient.addColorStop(1,fade_color3);
		ctx.fillStyle=my_gradient;
		ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	//random_column
	for (var draw_column_time = 0;draw_column_time<Math.floor(Math.random()*31);draw_column_time++) {
		var random_column = Math.floor(Math.random() * 16777215).toString(16);
    		random_column = "#" + ("000000" + random_column).slice(-6);
			ctx.fillStyle=random_column;
			ctx.fillRect(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w),canvas_min/64);
	}
	//random_row
	for (var draw_row_time = 0;draw_row_time<Math.floor(Math.random()*31);draw_row_time++) {
		var random_row = Math.floor(Math.random() * 16777215).toString(16);
    		random_row = "#" + ("000000" + random_row).slice(-6);
			ctx.fillStyle=random_row;
			ctx.fillRect(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),canvas_min/64,Math.floor(Math.random()*canvas_w));
	}
	//random_point
	for (var draw_point_time1 = 0;draw_point_time1<Math.floor(Math.random()*8);draw_point_time1++) {
		for (var draw_point_time2 = 0;draw_point_time2<Math.floor(Math.random()*8);draw_point_time2++) {
			for (var probability=0.4;probability<Math.random();) {
				var random_point = Math.floor(Math.random() * 16777215).toString(16);
    				random_point = "#" + ("000000" + random_point).slice(-6);
					ctx.fillStyle=random_point;
					ctx.fillRect(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),canvas_min/64,canvas_min/64);
			}
		}
	}
	//random_suqare
	for (var draw_suqare_time = 0;draw_suqare_time<Math.floor(Math.random()*16);draw_suqare_time++) {
		var random_suqare = Math.floor(Math.random() * 16777215).toString(16);
    		random_suqare = "#" + ("000000" + random_suqare).slice(-6);
			ctx.fillStyle=random_suqare;
			ctx.fillRect(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w/10),Math.floor(Math.random()*canvas_h));
	}
}
/*-------------------------------------------------Draw_T End-------------------------------------------------*/
/*---------------------------------------------------Draw_U---------------------------------------------------*/
function draw_u() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var fade_color1 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color1 = "#" + ("000000" + fade_color1).slice(-6);
	var fade_color2 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color2 = "#" + ("000000" + fade_color2).slice(-6);
	var my_gradient=ctx.createLinearGradient(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h));
	my_gradient.addColorStop(0,fade_color1);
	my_gradient.addColorStop(1,fade_color2);
	ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	for (var draw_time2 = 0;draw_time2<8;draw_time2++) {
		var random_color2 = Math.floor(Math.random() * 16777215).toString(16);
    		random_color2 = "#" + ("000000" + random_color2).slice(-6);
		var random_color3 = Math.floor(Math.random() * 16777215).toString(16);
    		random_color3 = "#" + ("000000" + random_color3).slice(-6);
		var start_xx = Math.floor(Math.random()*canvas_w);
		var start_yy = Math.floor(Math.random()*canvas_h);
		ctx.beginPath();
		ctx.moveTo(start_xx,start_yy);
ctx.quadraticCurveTo(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h));
ctx.quadraticCurveTo(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h));
ctx.quadraticCurveTo(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),start_xx,start_yy);
		var grd = ctx.createLinearGradient(0,0,Math.floor(Math.random()*canvas_w),0);
		grd.addColorStop(0,random_color2);
		grd.addColorStop(1,random_color3);
		ctx.fillStyle=grd;
		ctx.fill();
	}
}
/*-------------------------------------------------Draw_U End-------------------------------------------------*/
/*---------------------------------------------------Draw_V---------------------------------------------------*/
function draw_v() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random  Background
	ctx.fillStyle="white";
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random & Drawing
	for (var draw_suqare_time = 0;draw_suqare_time<64;draw_suqare_time++) {
		var random_suqare = (Math.floor(Math.random()*15)*1118481).toString(16);
    		random_suqare = "#" + ("000000" + random_suqare).slice(-6);
		
		var square_x = Math.floor(Math.random()*canvas_w*2-canvas_w/2);
		var square_y = Math.floor(Math.random()*canvas_h*2-canvas_h/2);
		var square_w = Math.floor(Math.random()*(canvas_max)*2);
			ctx.beginPath();
			ctx.lineWidth=Math.floor(Math.random()*10);
			ctx.strokeStyle=random_suqare;
			ctx.rect(square_x,square_y,square_w,square_w);
			ctx.stroke();
	}
}
/*-------------------------------------------------Draw_V End-------------------------------------------------*/
/*---------------------------------------------------Draw_W---------------------------------------------------*/
function draw_w() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var random_bg = (Math.floor(Math.random()*15)*1118481).toString(16);
    	random_bg = "#" + ("000000" + random_bg).slice(-6);
	ctx.fillStyle=random_bg;
	ctx.fillRect(0,0,canvas_w,canvas_h);
//Random Drawing
	for (var random_point_x = 0; random_point_x<canvas_w/10;random_point_x++) {
		for (var random_point_y = 0; random_point_y<canvas_h/10;random_point_y++) {
			var random_point = (Math.floor(Math.random()*15)*1118481).toString(16);
    			random_point = "#" + ("000000" + random_point).slice(-6);
				ctx.fillStyle=random_point;
				ctx.fillRect((random_point_x*10),(random_point_y*10),10,10);
		}
	}
}
/*-------------------------------------------------Draw_W End-------------------------------------------------*/
/*---------------------------------------------------Draw_X---------------------------------------------------*/
function draw_x() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
	var fade_color0 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color0 = "#" + ("000000" + fade_color0).slice(-6);
	var fade_color1 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color1 = "#" + ("000000" + fade_color1).slice(-6);
	var fade_color2 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color2 = "#" + ("000000" + fade_color2).slice(-6);
	var fade_color3 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color3 = "#" + ("000000" + fade_color3).slice(-6);
	var fade_color4 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color4 = "#" + ("000000" + fade_color4).slice(-6);
	var fade_color5 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color5 = "#" + ("000000" + fade_color5).slice(-6);
	var fade_color6 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color6 = "#" + ("000000" + fade_color6).slice(-6);
	var fade_color7 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color7 = "#" + ("000000" + fade_color7).slice(-6);
	var fade_color8 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color8 = "#" + ("000000" + fade_color8).slice(-6);
	var fade_color9 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color9 = "#" + ("000000" + fade_color9).slice(-6);
	var fade_color10 = Math.floor(Math.random() * 16777215).toString(16);
    	fade_color10 = "#" + ("000000" + fade_color10).slice(-6);
	var position_1 = Math.random();
	var position_2 = Math.random();
	var position_3 = Math.random();
	var position_4 = Math.random();
	var position_5 = Math.random();
	var position_6 = Math.random();
	var position_7 = Math.random();
	var position_8 = Math.random();
	var position_9 = Math.random();
	var my_gradient=ctx.createLinearGradient(Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h),Math.floor(Math.random()*canvas_w),Math.floor(Math.random()*canvas_h));
		my_gradient.addColorStop(0,fade_color0);
		my_gradient.addColorStop(position_1,fade_color1);
		my_gradient.addColorStop(position_2,fade_color2);
		my_gradient.addColorStop(position_3,fade_color3);
		my_gradient.addColorStop(position_4,fade_color4);
		my_gradient.addColorStop(position_5,fade_color5);
		my_gradient.addColorStop(position_6,fade_color6);
		my_gradient.addColorStop(position_7,fade_color7);
		my_gradient.addColorStop(position_8,fade_color8);
		my_gradient.addColorStop(position_9,fade_color9);
		my_gradient.addColorStop(1,fade_color10);
		ctx.fillStyle=my_gradient;
		ctx.fillRect(0,0,canvas_w,canvas_h);
}
/*-------------------------------------------------Draw_X End-------------------------------------------------*/
/*---------------------------------------------------Draw_Y---------------------------------------------------*/function draw_y() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
	//Random Drawing
	var hsl_h1 = Math.floor(Math.random() * 360);
	var hsl_h2 = Math.floor(Math.random() * 360);
	var hsl_h3 = (hsl_h1 + hsl_h2)/2;
	
	var hsl_s1 = Math.floor(Math.random() * 50+50);
	var hsl_s2 = hsl_s1;
	var hsl_s3 = hsl_s1;
	
	var hsl_l1 = 50;
	var hsl_l2 = hsl_l1 - Math.floor(Math.random() * 50);
	var hsl_l3 = (hsl_l1 + hsl_l2)/2;

	var random_hsl1 = "hsl(" + hsl_h1 + "," + hsl_s1 + "%," + hsl_l1 + "%)";
	var random_hsl2 = "hsl(" + hsl_h2 + "," + hsl_s2 + "%," + hsl_l2 + "%)";
	var random_hsl3 = "hsl(" + hsl_h3 + "," + hsl_s3 + "%," + hsl_l3 + "%)";
	var my_gradient=ctx.createLinearGradient(0,0,0,canvas_h);
			my_gradient.addColorStop(0,random_hsl1);
			my_gradient.addColorStop(1,random_hsl2);
		ctx.fillStyle=my_gradient;
		ctx.fillRect(0,0,canvas_w,canvas_h);
for (var draw_arc_distance1 = 0;draw_arc_distance1<canvas_h/15;draw_arc_distance1++) {
	for (var draw_arc_distance2 = 0;draw_arc_distance2<canvas_w/31;draw_arc_distance2++) {
		ctx.beginPath();
		ctx.arc(draw_arc_distance2*32,draw_arc_distance1*16,5,0,2*Math.PI);
		ctx.fillStyle=random_hsl3;
		ctx.fill();
		ctx.beginPath();
		ctx.arc(draw_arc_distance2*32+16,draw_arc_distance1*16+8,5,0,2*Math.PI);
		ctx.fillStyle=random_hsl3;
		ctx.fill();
	}
}
}
/*-------------------------------------------------Draw_Y End-------------------------------------------------*/
/*---------------------------------------------------Draw_Z---------------------------------------------------*/
function draw_z() {
	"use strict";
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.globalCompositeOperation="source-over";
	ctx.globalAlpha=1;
	ctx.lineWidth=1;
	ctx.shadowBlur=0;
//Random Background
//Random Drawing
	for (var draw_whiteline_time = 0;draw_whiteline_time<32;draw_whiteline_time++) {
		var random_suqare = (Math.floor(Math.random()*15)*1118481).toString(16);
    		random_suqare = "#" + ("000000" + random_suqare).slice(-6);
		
		var square_x = Math.floor(Math.random()*canvas_w);
		var square_y = Math.floor(Math.random()*canvas_h);
		var square_w = Math.floor(Math.random()*5);
		var square_h = Math.floor(Math.random()*(canvas_h - square_y) + square_y);
			var a_num = Math.random();
			if (a_num>0.5) {ctx.fillStyle="#FFFFFF";}
			else {ctx.fillStyle="#000000";}
			ctx.fillRect(square_x,square_y,square_w,square_h);
	}
}
/*-------------------------------------------------Draw_Z End-------------------------------------------------*/