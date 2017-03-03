#pragma strict

var speed:float;

function Start () {

}

function Update () {
	transform.position.x += speed;
}


function StopCamera(){
	speed = 0;
}
