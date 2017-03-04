#pragma strict
var Wizard : Wizard;
var lives : int;

var health1 : Texture2D; //one life left
var health2 : Texture2D; //two lives left
var health3 : Texture2D; //full health

function Start () {
	Wizard.lives = 3;
}

function Update () {
	if(Wizard.lives == 1){
		print("1 life");
		GetComponent.<GUITexture>().texture = health1;
	}

	if(Wizard.lives == 2){
		print("2 life");
		GetComponent.<GUITexture>().texture = health2;
	}
	
	if(Wizard.lives == 3){
		print("3 life");
		GetComponent.<GUITexture>().texture = health3;
	}
}