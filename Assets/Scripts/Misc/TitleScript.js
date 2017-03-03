#pragma strict

import UnityEngine.SceneManagement;

var intro:String;

function Start () {

}

function Update () {
	if (Input.GetButton("Fire1")){	// shoot
		SceneManager.LoadScene(intro);
	}
}
