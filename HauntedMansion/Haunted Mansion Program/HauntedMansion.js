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
	await roll(120,30,2)
	setMainLed({ r:255, g:0, b:0 });
	
	await roll(40,38,2);
 	await speak('music note number 2');
	
	await roll(140,40,2)
	stopRoll();
	await roll(90,35,1)
	setMainLed({ r:0, g:255, b:0 });

	await roll(0,40,2)
	await roll(-50,30,2)
	await speak('music note number 3');
	setMainLed({ r:255, g:0, b:255 });
	await roll(0,40,3)
	await scrollMatrixText('End', { r: 255, g: 245, b: 0 }, 15, false);
	
}
