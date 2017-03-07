#pragma strict

var drop:GameObject;

var force:int;

var health:int;

function Start () {
	GetComponent.<Rigidbody2D>().AddForce(Vector3.left*force);
}

function Update () {

}


function OnCollisionEnter2D (hit : Collision2D){
	if (hit.gameObject.CompareTag("boss_fireball") || hit.gameObject.CompareTag("dragon"))
		Physics2D.IgnoreCollision(hit.collider, GetComponent.<Collider2D>());

	if (hit.gameObject.CompareTag("fireball")){
		health--;
	}

	if (health <= 0){
		Instantiate(drop, transform.position, Quaternion.identity);
		Destroy(this.gameObject);
	}
}
