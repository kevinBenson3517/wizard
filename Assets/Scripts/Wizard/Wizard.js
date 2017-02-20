#pragma strict

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

	transform.rotation = Quaternion.identity;
}

function Move(){
	if (can_move){
		var x:int = Input.GetAxisRaw("Horizontal");
		print(x*speed);
		transform.Translate(x*speed,0,0);
		if(x>0){
			if(currentDir != true){
				transform.localScale += new Vector3(6.5, 0, 0);
				currentDir = true;
			}
		}
		if(x<0){
			if(currentDir != false){
				transform.localScale += new Vector3(-6.5, 0, 0);
				currentDir = false;
			}
		}
	}
}

function Jump(){
	if (GetComponent.<Rigidbody2D>().velocity.y < 0.1 && GetComponent.<Rigidbody2D>().velocity.y > -0.1 )
		jumping = false;

	print(GetComponent.<Rigidbody2D>().velocity.y);

	if (!jumping){
		if (Input.GetButtonDown("Jump") || Input.GetButtonDown("Fire1"))
			GetComponent.<Rigidbody2D>().AddForce(Vector3.up*300);
			jumping = true;
	}

}

function Fire(){
	//todo: cooldown
	if (can_cast_fireball){
		if (Input.GetButtonDown("Fire2")){
			Instantiate(fireball,transform.position+width,Quaternion.identity);
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
