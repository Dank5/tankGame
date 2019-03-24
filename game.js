// Store the background colour
bgColour = "#fff";

// Variable to store the player
var player;

// Function to setup game variables
function setup() {
	
	// Create the canvas and set the parent
	cnv = createCanvas(800,800);
	cnv.parent("gameContainer");
	
	// Create the player
	player = Rectangle(400, 400, 30, 50, "green", 0);
	playerTurret = Rectangle(400, 375, 5, 50, "green", 0);
	
}

// Game loop
function draw() {
	
	// Clear the background
	background(bgColour);
	
	// Draw the player
	drawRect(player);
	drawTurret(playerTurret);
	
	// Check for key presses
	keyPressHandler();
	
	// Move the player
	playerMove();
}