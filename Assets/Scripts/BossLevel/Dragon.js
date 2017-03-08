#pragma strict

import UnityEngine.SceneManagement;

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

var dead:boolean;

var fadeout:GameObject;
var fadeout_increment:float;
var time_to_end:float;
var time_since_killed:float;
var level:String;

function Start () {
	initial_height = transform.position.y;
	max_height = initial_height + range;
	min_height = initial_height - range;

	print(fadeout.GetComponent.<SpriteRenderer>().color);
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
	if(dead){
		transform.position.y -= 0.10;
		transform.Rotate(Vector3.back*2);
		fadeout.GetComponent.<SpriteRenderer>().color.a += fadeout_increment;
		if (Time.time-time_since_killed > time_to_end){
			Application.LoadLevel(level);
		}
	}
	else
		transform.position.y += speed;
}


function Fire(){
	var location:Vector3 = transform.position - transform.right;
	if (Time.time - time_since_last_fireball > fireball_cooldown && !dead){
		var obj:GameObject = Instantiate(fireballs[fireball_iteration % fireballs.length],location,Quaternion.identity);
		obj.transform.localScale =  Vector3.Scale(obj.transform.localScale, Vector3(-1,1,1));
		if(fireball_iteration % fireballs.length == 0){obj.GetComponent.<BossFireball>().speed *= -1;}
		Physics2D.IgnoreCollision(obj.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());

		time_since_last_fireball = Time.time;
		fireball_iteration++;
	}

}


function OnCollisionEnter2D (hit : Collision2D){
	print(hit.gameObject.tag);
	if (hit.gameObject.tag == "fireball")
		health--;
	if (health <= 0){
		dead = true;
		time_since_killed = Time.time;
	}
}
