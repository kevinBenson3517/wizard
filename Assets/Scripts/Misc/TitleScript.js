#pragma strict

import UnityEngine.SceneManagement;

var intro:String;

var time:float;

function Start () {
	time = Time.time;
}

function Update () {
	if (Input.anyKey && Time.time-time > 1){	// shoot
		SceneManager.LoadScene(intro);
	}
}
