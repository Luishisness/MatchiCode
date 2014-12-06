function main() {
	var sketch = document.getElementById('sketch');
	var context = sketch.getContext("2d");
	


	context.fillStyle = "#00ff00"
	context.beginPath();
	context.arc(50, 40, 40, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();
	
	context.fillStyle = "#FFFFFF"
	context.beginPath();
	context.fillRect(30, 30, 10, 10);
	context.fillRect(60, 30, 10, 10);
	context.closePath();
	context.fill();
	
	context.fillStyle = "#000000"
	context.beginPath();
	context.fillRect(35, 60, 30, 10);
	context.closePath();
	context.fill();
	
	context.fillStyle = "#000000"
	context.beginPath();
	context.fillRect(30, 30, 4, 4);
	context.fillRect(60, 30, 4, 4);
	context.closePath();
	context.fill();
}

document.addEventListener('DOMContentLoaded', main);
