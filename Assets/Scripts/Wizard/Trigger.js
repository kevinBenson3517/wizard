#pragma strict

import UnityEngine.SceneManagement;

var level:String;

function Start () {
	
}

function Update () {

}

function OnTriggerEnter2D (hit : Collider2D){
	print("here");
	if (hit.gameObject.CompareTag("player")){
		Application.LoadLevel(level);

	}

}
