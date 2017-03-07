#pragma strict
var Wizard : Wizard;
var lives : int;

var health1 : Texture2D; //one life left
var health2 : Texture2D; //two lives left
var health3 : Texture2D; //full health
var health4 : Texture2D; //extra health from coins

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

	if (Wizard.money >= 10){
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

}