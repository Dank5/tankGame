// AUTHOR: Lewis Danks
// PURPOSE: Hold all of the utility functions

// Function to get a point rotated around an origin
function rotatePoint(pointX, pointY, originX, originY, angle) {
	
	// Convert the angle to radians
	angle = angle * Math.PI / 180.0;
	
	// Get the sin and cos of the angle
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	
	// Return the rotated point
	return {
		x: c * (pointX - originX) - s * (pointY - originY) + originX,
		y: s * (pointX - originX) + c * (pointY - originY) + originY
	};
}