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
var turretRotation = 30;
var degToRad = Math.PI/180;

// Function to handle key presses
function keyPressHandler() {
	
	// Check for movement key presses
	// tank move right
	if (keyIsDown(68)) {
		player.r += rotation;
	}
	// tank move left
	if (keyIsDown(65)) {
		player.r -= rotation;
	}
	// tank move up
	if (keyIsDown(87)) {
		// Check that the player isn't at max speed and accelerate
		if (playerSpeed < maxSpeed) {
			playerSpeed += acceleration;
		}
	}
	//tank move down
	if (keyIsDown(83)) {
		// Check that the player isn't at max speed and accelerate
		if (playerSpeed > minSpeed) {
			playerSpeed -= acceleration;
		}
	}
	// turret movement
	// turret left
	if (keyIsDown(79)) {
		playerTurret.r -= (turretRotation * degToRad);
	}
	//turret right;
	if (keyIsDown(80)) {
		playerTurret.r += (turretRotation * degToRad);
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
	// Slow the player down in a negative magnitude if they are moving backwards
	if (playerSpeed < 0) {
		playerSpeed -= deceleration;
		
		// Check whether they have come to a stop
		if (playerSpeed > 0) {
			playerSpeed = 0;
		}
	}
	
	
	// Calculate the x and y components of movement
	player.x += playerSpeed * Math.sin(player.r * degToRad);
	player.y -= playerSpeed * Math.cos(player.r * degToRad);
	playerTurret.x += playerSpeed * Math.sin(player.r * degToRad);
	playerTurret.y -= playerSpeed * Math.cos(player.r * degToRad);
}

