#pragma strict

var health:int;

var fireballs:GameObject[];
var fireball_iteration:int = 0;

var time_since_last_fireball:float;
var fireball_cooldown:float;

var range:float;
var speed:float;
var going_up:boolean;

var initial_height:float;
var max_height:float;
var min_height:float;

function Start () {
	initial_height = transform.position.y;
	max_height = initial_height + range;
	min_height = initial_height - range;

}

function Update () {
	Move();
	Fire();
}

function Move(){
	if (transform.position.y > max_height){
		speed = -speed;
		going_up = false;
	}
	if (transform.position.y < min_height){
		speed = -speed;
		going_up = true;
	}

	transform.position.y += speed;
}


function Fire(){
	var location:Vector3 = transform.position - transform.right;
	if (Time.time - time_since_last_fireball > fireball_cooldown){
		var obj:GameObject = Instantiate(fireballs[fireball_iteration % fireballs.length],location,Quaternion.identity);
		obj.transform.localScale =  Vector3.Scale(obj.transform.localScale, Vector3(-1,1,1));
		obj.GetComponent.<BossFireball>().speed *= -1;

		time_since_last_fireball = Time.time;
		fireball_iteration++;
	}

}
