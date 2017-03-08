#pragma strict

var drop:GameObject;

var speed:float;

var health:int;

function Start () {


}

function Update () {
	transform.position.y += speed;
}


function OnCollisionEnter2D (hit : Collision2D){
	if (hit.gameObject.CompareTag("fireball")){
		health--;
	}

	if (transform.position.y < 1.5){
		print("too low");
		transform.position.y = 1.51;
		ChangeDirection();
	}

	if (transform.position.y >= 4.5){
		print("too high");
		transform.position.y = 4.49;
		ChangeDirection();
	}

	if (health <= 0){
		Instantiate(drop, transform.position, Quaternion.identity);
		Destroy(this.gameObject);
	}
}

function ChangeDirection(){
	speed = -speed;
}
