#pragma strict

function OnTriggerEnter2D(hit : Collider2D){
	GameObject.FindWithTag("MainCamera").SendMessage("StopCamera");
}
