#pragma strict

var explode:GameObject;

var main_camera:Camera;

var speed:float;
var damage:int;

function Start () {
	main_camera = GameObject.FindWithTag("MainCamera").GetComponent.<Camera>();
	// var rend = GetComponent.<Renderer>();
	//
	// // Set specular shader
	// rend.material.shader = Shader.Find ("Specular");
	//
	// // Set red specular highlights
	// rend.material.SetColor ("_SpecColor", Color.red);
}

function Update () {
	transform.Translate(speed,0,0);

	//destroys object when outside of the camera
	var camera_position:Vector3 = main_camera.WorldToViewportPoint(transform.position);
	if (camera_position.y < -0.05 || camera_position.y > 1.05 || camera_position.x < -0.05 || camera_position.x > 1.05)
		Destroy(this.gameObject);
}

function OnCollisionEnter2D (hit : Collision2D){
	print(hit.gameObject.tag);
	if(hit.gameObject.CompareTag("boss_fireball"))
		Physics2D.IgnoreCollision(hit.collider, GetComponent.<Collider2D>());

	if (!hit.gameObject.CompareTag("player")){
		Instantiate(explode, transform.position, Quaternion.identity);
		Destroy(this.gameObject);
	}
}
