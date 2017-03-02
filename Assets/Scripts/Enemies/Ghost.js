#pragma strict

import System.Math;

var radius:float;
var period:float;
var scale:float;

var center:Vector3;

function Start () {
	center = transform.position;
	transform.position.x += radius;

}

function Update () {
	transform.RotateAround(center, Vector3.back, period*Time.deltaTime);
	transform.rotation.z = 0;
}
