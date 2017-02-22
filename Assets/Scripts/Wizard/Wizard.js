#pragma strict

var money:int = 0;

var jumping:boolean = false;
var can_move:boolean = true;


var fireball:GameObject;
var gravityball:GameObject;

var can_cast_fireball = true;
var can_cast_gravityball = true;
var can_cast_slowdown = true;

var currentDir:boolean = true; // Right is true, left is false

var speed:float = 0.25;


var width:Vector3;

function Start () {
	width = Vector3(GetComponent.<Renderer>().bounds.size.x+.25, 0);
}

function Update () {
	Move();
	Jump();

	Fire();
}

function Move(){
	if (can_move){
		var x:int = Input.GetAxisRaw("Horizontal");
		transform.Translate(x*speed,0,0);
		if(x>0){
			if(currentDir != true){
				transform.localScale = Vector3.Scale(transform.localScale, Vector3(-1,1,1));
				currentDir = true;
			}
		}
		if(x<0){
			if(currentDir != false){
				transform.localScale =  Vector3.Scale(transform.localScale, Vector3(-1,1,1));
				currentDir = false;
			}
		}
	}
}

function Jump(){
	if (GetComponent.<Rigidbody2D>().velocity.y < 0.1 && GetComponent.<Rigidbody2D>().velocity.y > -0.1 )
		jumping = false;

	if (!jumping){
		if (Input.GetButtonDown("Jump") || Input.GetButtonDown("Fire1"))
			GetComponent.<Rigidbody2D>().AddForce(Vector3.up*300);
			jumping = true;
	}

}

function Fire(){
	//todo: cooldown
	var location:Vector3 = transform.position + width;
	if (currentDir == false)
		location -= transform.right + width;
	if (can_cast_fireball){
		if (Input.GetButtonDown("Fire2")){
			var obj:GameObject = Instantiate(fireball,location,Quaternion.identity);
			if (currentDir == false){
				obj.transform.localScale =  Vector3.Scale(obj.transform.localScale, Vector3(-1,1,1));
				obj.GetComponent.<fireball>().speed *= -1;
			}
		}
	}
	if(can_cast_gravityball){
		if (Input.GetButtonDown("Fire3")){

		}
	}
	if(can_cast_slowdown){
		if (Input.GetButtonDown("Fire4")){

		}
	}
}

function OnCollisionEnter2D (hit : Collision2D){
}








function AddMoney(amount : int) {
	money += amount;
}
