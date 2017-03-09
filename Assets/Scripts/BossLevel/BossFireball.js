#pragma strict

var type:int;

var explode:GameObject;

var force:float;
var speed:float;

var main_camera:Camera;

function Start () {
	main_camera = GameObject.FindWithTag("truecamera").GetComponent.<Camera>();
	switch (type){
		case 0:
			break;
		case 1:
			GetComponent.<Rigidbody2D>().AddForce(Vector3.left*force);
			break;
	}

}

function Update () {
	switch (type){
		case 0:
			transform.Translate(speed,0,0);
			break;
		case 1:
			break;
	}

	var camera_position:Vector3 = main_camera.WorldToViewportPoint(transform.position);
	if (camera_position.y < -0.05 || camera_position.y > 1.05 || camera_position.x < -0.05 || camera_position.x > 1.05)
		Destroy(this.gameObject);
}

function OnCollisionEnter2D (hit : Collision2D){
	if (hit.gameObject.CompareTag("player")){
		Instantiate(explode, transform.position, Quaternion.identity);
		Destroy(this.gameObject);
	}
	if (!hit.gameObject.CompareTag("fireball") && !hit.gameObject.CompareTag("dragon") && !hit.gameObject.CompareTag("troll"))
		Destroy(this.gameObject);
}
