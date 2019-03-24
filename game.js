// Store the background colour
bgColour = "#006400";

// Variable to store the player
var player;

// Function to setup game variables
function setup() {
	
	// Create the canvas and set the parent
	cnv = createCanvas(800,800);
	cnv.parent("gameContainer");
	
	// Create the player
	player = Rectangle(400, 400, 30, 50, "green", 0);
	
}

// Game loop
function draw() {
	
	// Clear the background
	background(bgColour);
	
	// Draw the player
	drawRect(player);
	
	player.r += 1;
	
}