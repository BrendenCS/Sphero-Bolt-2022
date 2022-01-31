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
	await roll(90,40,4)
	await speak('music note number 1');

 
}
