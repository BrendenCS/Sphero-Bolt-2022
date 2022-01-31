/*
Programer: Mr. Lange
Team Member: Dominic
Date: 1-26-2022
Program: We will be making a program to go through a Haunted Mansion Maze filled with Haunted
Sounds, Changing of Colors, and other obstacles along the way using a Shero Bolt and Java Script.
*/

async function startProgram() {
	// Write code here
	
	await scrollMatrixText('Start', { r: 255, g: 245, b: 0 }, 15, false);
	await roll(0, 50, 3);
	setMainLed({ r:0, g:0, b: 255 });
	stopRoll();
	setHeading(90);
	await roll(0, 40, 1);
	await roll(90,35,4)
	await speak('music note number 1');
	await roll(180,40,2)
	await roll(-137,40,2)
	await roll(120,33,2)
	setMainLed({ r:255, g:0, b:0 });
	await roll(70,40,3);
 	await speak('music note number 2');
}
