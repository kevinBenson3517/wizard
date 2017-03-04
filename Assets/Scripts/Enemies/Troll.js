#pragma strict

var drop:GameObject;

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
		ChangeDirection();
	}
	
	if (hit.gameObject.CompareTag("troll")){
		ChangeDirection();
	}

	if (hit.gameObject.CompareTag("player")) 
      { 
          hit.gameObject.GetComponent(Wizard).lives -=1;
		  print(hit.gameObject.GetComponent(Wizard).lives);
      }

	if (health <= 0){
		Instantiate(drop, transform.position, Quaternion.identity);
		Destroy(this.gameObject);
	}
}

function ChangeDirection(){
	speed = -speed;
	transform.localScale = Vector3.Scale(transform.localScale, Vector3(-1,1,1));
}
