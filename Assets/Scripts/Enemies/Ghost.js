#pragma strict

import System.Math;

var radius:float;
var period:float;
var scale:float;
var health:int;
var drop:GameObject;

var speed:float;

var center:Vector3;

function Start () {
	center = transform.position;
	transform.position.x += radius;

}

function Update () {
	transform.RotateAround(center, Vector3.back, period*Time.deltaTime);
	transform.rotation.z = 0;
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
		Instantiate(drop, transform.position, Quaternion.identity);
		Destroy(this.gameObject);
	}
}