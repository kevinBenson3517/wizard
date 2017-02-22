#pragma strict

var speed:float;

var health:int;

function Start () {


}

function Update () {
	transform.position.x += -speed;
	transform.rotation = Quaternion.identity;
}

function OnCollisionEnter2D (hit : Collision2D){
	if (hit.gameObject.CompareTag("fireball")){
		health--;
	}


	if (health <= 0){
		Destroy(this.gameObject);
	}
}
