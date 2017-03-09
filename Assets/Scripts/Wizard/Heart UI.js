#pragma strict
var Wizard : Wizard;
var lives : int;

var health1 : Texture2D; //one life left
var health2 : Texture2D; //two lives left
var health3 : Texture2D; 
var health4 : Texture2D; 
var health5 : Texture2D; 
var health6 : Texture2D; 
var health7 : Texture2D; 
var health8 : Texture2D; 
var health9 : Texture2D; 
var health10 : Texture2D; 

function Start () {
	Wizard.lives = 3;
}

function Update () {
	if(Wizard.lives == 1){
		GetComponent.<GUITexture>().texture = health1;
	}

	else if(Wizard.lives == 2){
		GetComponent.<GUITexture>().texture = health2;
	}
	
	else if(Wizard.lives == 3){
		GetComponent.<GUITexture>().texture = health3;
	}

	else if(Wizard.lives == 4){
		GetComponent.<GUITexture>().texture = health4;
	}

	else if(Wizard.lives == 5){
		GetComponent.<GUITexture>().texture = health5;
	}

	else if(Wizard.lives == 6){
		GetComponent.<GUITexture>().texture = health6;
	}

	else if(Wizard.lives == 7){
		GetComponent.<GUITexture>().texture = health7;
	}

	else if(Wizard.lives == 8){
		GetComponent.<GUITexture>().texture = health8;
	}

	else if(Wizard.lives == 9){
		GetComponent.<GUITexture>().texture = health9;
	}

	else if(Wizard.lives == 10){
		GetComponent.<GUITexture>().texture = health10;
	}

	if (Wizard.money >= 9){
		AddHearts();
		Wizard.money = Wizard.money - 10;
	}
}

function AddHearts() {
	/* if the wizard has 10 or more coins, gain a life and subtract 10 coins from count */
	if(Wizard.lives == 1){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health2;
	}

	else if(Wizard.lives == 2){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health3;
	}
	
	else if(Wizard.lives == 3){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health4;
	}

	else if(Wizard.lives == 4){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health5;
	}

	else if(Wizard.lives == 5){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health6;
	}

	else if(Wizard.lives == 6){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health7;
	}

	else if(Wizard.lives == 7){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health8;
	}

	else if(Wizard.lives == 8){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health9;
	}

	else if(Wizard.lives == 9){
		Wizard.lives++;
		GetComponent.<GUITexture>().texture = health10;
	}
}