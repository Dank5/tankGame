// AUTHOR: Lewis Danks
// PURPOSE: A file to store all of the objects for the engine
// NOTE: Each object is simply returned as a dictionary and has no member methods

// Create a function to create a rectangle object
function Rectangle(_x, _y, width, height, colour, rotation) {
	
	// Return an object
	return {x:_x, y:_y, w:width, h:height, c:colour, r:rotation};
	
}