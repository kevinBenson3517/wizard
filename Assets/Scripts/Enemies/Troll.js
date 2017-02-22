#pragma strict

var speed:float;

var health:int;

function Start () {


}

function Update () {
	transform.position.x += -speed;
}

function OnCollisionEnter2D (hit : Collision2D){
	if (hit.gameObject.CompareTag("fireball")){
		health--;
	}
	if (hit.gameObject.CompareTag("Untagged")){
		speed = -speed;
		transform.localScale = Vector3.Scale(transform.localScale, Vector3(-1,1,1));
	}

	if (health <= 0){
		Destroy(this.gameObject);
	}
}
