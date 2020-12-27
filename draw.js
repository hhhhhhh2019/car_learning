var cnv = document.getElementById('cnv');
var ctx = cnv.getContext('2d');


function line(x0, y0, x1, y1, c) {
	ctx.strokeColor = c;
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
	ctx.stroke();
}

function polygon(p, c) {
	ctx.fillStyle = c;
	ctx.beginPath();
	ctx.moveTo(p[0][0], p[0][1]);
	for (let i = 1; i < p.length; i++) {
		ctx.lineTo(p[i][0], p[i][1])
	}
	ctx.fill();
}

function clear(c='white') {
	ctx.fillStyle = c;
	ctx.fillRect(0, 0, cnv.width, cnv.height);
}