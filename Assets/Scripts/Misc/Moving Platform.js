#pragma strict

var speed:float;


function Start () {


}

function Update () {
	transform.position.x += -speed;
}


function OnCollisionEnter2D (hit : Collision2D){
	if (hit.gameObject.CompareTag("mp")){
		ChangeDirection();

	}
	print("hit");
}

function ChangeDirection(){
	speed = -speed;
	transform.localScale = Vector3.Scale(transform.localScale, Vector3(-1,1,1));
}
