#pragma strict

function Start () {

}

function Update () {

}


function OnTriggerEnter2D (hit : Collider2D){
	if (hit.gameObject.CompareTag("troll")){
		hit.gameObject.SendMessage("ChangeDirection");
	}
}
