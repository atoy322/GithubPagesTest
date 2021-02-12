

class AnalogClock {
	constructor(cid){
		this.canvas = document.getElementById(cid);
		this.context = this.canvas.getContext("2d");
		this.w = this.canvas.width;
		this.h = this.canvas.height;
		this.hour = 0;
		this.minute = 0;
		this.second = 0;
		this.render();
	}
	
	settime(h, m, s){
		this.hour = h;
		this.minute = m;
		this.second = s;
	}
	
	gettime(){
		var times = new Array(3);
		times[0] = this.hour;
		times[1] = this.minute;
		times[2] = this.second;
		return times;
	}
	
	timetotheta(t, tmax){
		var theta = (t / tmax * 2*Math.PI) - (Math.PI/2);
		return theta;
	}
	
	render(){
		var mid_x = this.w/2;
		var mid_y = this.h/2;
		this.context.clearRect(0, 0, this.w, this.h);
		
		this.context.beginPath();
		this.context.fillStyle = "rgb(255,255,255)";
		this.context.arc(mid_x, mid_y, 300, 0, 2*Math.PI, true);
		this.context.fill();
		
		this.context.strokeStyle = "rgb(0,0,0)";
		this.context.arc(mid_x, mid_y, 300, 0, 2*Math.PI, true);
		this.context.lineWidth = 20;
		this.context.stroke();
		
		this.context.lineWidth = 10;
		this.context.strokeStyle = "rgb(255,0,0)";
		var theta = this.timetotheta(this.second, 60);
		var x = 250*Math.cos(theta);
		var y = 250*Math.sin(theta);
		this.context.beginPath();
		this.context.moveTo(mid_x, mid_y);
		this.context.lineTo(mid_x+x, mid_y+y);
		this.context.stroke();
		this.context.closePath();
		
		this.context.strokeStyle = "rgb(0,0,0)";
		var theta = this.timetotheta(this.minute, 60);
		var x = 250*Math.cos(theta);
		var y = 250*Math.sin(theta);
		this.context.beginPath();
		this.context.moveTo(mid_x, mid_y);
		this.context.lineTo(mid_x+x, mid_y+y);
		this.context.stroke();
		this.context.closePath();
		
		this.context.lineWidth = 20;
		this.context.strokeStyle = "rgb(0,0,0)";
		var theta = this.timetotheta(this.hour, 24);
		var x = 200*Math.cos(theta);
		var y = 200*Math.sin(theta);
		this.context.beginPath();
		this.context.moveTo(mid_x, mid_y);
		this.context.lineTo(mid_x+x, mid_y+y);
		this.context.stroke();
		this.context.closePath();
		
		this.context.beginPath();
		this.context.fillStyle = "rgb(0,0,0)";
		this.context.arc(mid_x, mid_y, 15, 0, 2*Math.PI, true);
		this.context.fill();
		
		requestAnimationFrame(this.render.bind(this));
	}
}

function onstart(){
	var clock = new AnalogClock("analogClock");  // id of canvas element.
	var date = new Date();
	clock.settime(date.getHours(), date.getMinutes(), date.getSeconds());
	setInterval(() => {
		var date = new Date();
		clock.hour = date.getHours();
		clock.minute = date.getMinutes();
		clock.second = date.getSeconds();
	}, 1000);
}

