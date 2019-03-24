// AUTHOR: Lewis Danks
// Purpose: All of the functions to render shapes

// Function to render a rectangle
function drawRect(r) {
	
	// Get each point rotated by the angle
	// Get top left rotated around the origin, top right, bottom right then bottom left
	var p1 = rotatePoint(r.x - r.w / 2, r.y + r.h / 2, r.x, r.y, r.r);
	var p2 = rotatePoint(r.x + r.w / 2, r.y + r.h / 2, r.x, r.y, r.r);
	var p3 = rotatePoint(r.x + r.w / 2, r.y - r.h / 2, r.x, r.y, r.r);
	var p4 = rotatePoint(r.x - r.w / 2, r.y -r.h / 2, r.x, r.y, r.r);
	
	// Set the fill colour
	fill(r.c);
	
	// Draw the rectangle
	quad(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
}

// Function to render a rectangle
function drawTurret(r) {
	
	// Get each point rotated by the angle
	// Get top left rotated around the bottom of the turret, top right, bottom right then bottom left
	var p1 = rotatePoint(r.x - r.w / 2, r.y + r.h / 2, r.x, r.y + (r.h / 2), r.r);
	var p2 = rotatePoint(r.x + r.w / 2, r.y + r.h / 2, r.x, r.y + (r.h / 2), r.r);
	var p3 = rotatePoint(r.x + r.w / 2, r.y - r.h / 2, r.x, r.y + (r.h / 2), r.r);
	var p4 = rotatePoint(r.x - r.w / 2, r.y -r.h / 2,  r.x, r.y + (r.h / 2), r.r);
	
	// Set the fill colour
	fill(r.c);
	
	// Draw the rectangle
	quad(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
}