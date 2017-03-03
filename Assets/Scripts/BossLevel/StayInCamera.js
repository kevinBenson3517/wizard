#pragma strict

var main_camera:Camera;
var margin_x:float[];
var margin_y:float[];

function Start () {
	main_camera = GameObject.FindWithTag("MainCamera").GetComponent.<Camera>();
}

function Update () {
	var camera_position:Vector3 = main_camera.WorldToViewportPoint(transform.position);

	//constrain player's position to camera, margins
	camera_position.x = Mathf.Clamp(camera_position.x, margin_x[0],margin_x[1]);
	camera_position.y = Mathf.Clamp(camera_position.y, margin_y[0],margin_y[1]);

	transform.position = main_camera.ViewportToWorldPoint(camera_position);
}
