// AUTHOR: Lewis Danks
// PURPOSE: Handle all physics, including player movement

// Set the rotation amount value (speed of rotation)
var rotation = 2;

// Set the player current speed
var playerSpeed = 0;

// Store the max and min speed of the player
var maxSpeed = 5;
var minSpeed = -2;

// Store the acceleration and deceleration of the player
var acceleration = 0.2;
var deceleration = -0.05;

// Function to handle key presses
function keyPressHandler() {
	
	// Check for movement key presses
	if (keyIsDown(RIGHT_ARROW)) {
		player.r += rotation;
	}
	if (keyIsDown(LEFT_ARROW)) {
		player.r -= rotation;
	}
	if (keyIsDown(UP_ARROW)) {
		// Check that the player isn't at max speed and accelerate
		if (playerSpeed < maxSpeed) {
			playerSpeed += acceleration;
		}
	}
	if (keyIsDown(DOWN_ARROW)) {
		// Check that the player isn't at max speed and accelerate
		if (playerSpeed > minSpeed) {
			playerSpeed -= acceleration;
		}
	}
	
}

// Function to move the player
function playerMove() {
	
	// Slow the player down if they are moving
	if (playerSpeed > 0) {
		playerSpeed += deceleration;
		
		// Check whether they have come to a stop
		if (playerSpeed < 0) {
			playerSpeed = 0;
		}
	}
	
	// Calculate the x and y components of movement
	player.x += playerSpeed * Math.sin(player.r * Math.PI / 180.0);
	player.y -= playerSpeed * Math.cos(player.r * Math.PI / 180.0);
	
}