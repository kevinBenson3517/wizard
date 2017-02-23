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
var jumpForce:int;
var health:int;

var width:Vector3;


/*----------------------
	for sound effects 
	---------------------*/
var shoot_sound : AudioClip; // fireball shoot audio clip 
var jump_sound : AudioClip;	 // jump audio clip 
private var shoot_source : AudioSource;
private var jump_source : AudioSource; 
private var volLowRange : float = 0.5;
private var volHighRange : float = 1.0;

function Awake() {
	/* for turning on the sound effect */
	shoot_source = GetComponent.<AudioSource>();
	jump_source = GetComponent.<AudioSource>();
}

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
			GetComponent.<Rigidbody2D>().AddForce(Vector3.up*jumpForce);
			jumping = true;
			jump_source.PlayOneShot(jump_sound, .5);
		}
	}

}

function Fire(){
	//todo: cooldown
	var location:Vector3 = transform.position + width;
	if (currentDir == false)
		location -= transform.right + width;
	if (can_cast_fireball){
		if (Input.GetButtonDown("Fire2")){
			// sfx for fireball shoot:
			var vol : float = Random.Range(volLowRange, volHighRange); // randomizes vol to make more interesting
			shoot_source.PlayOneShot(shoot_sound, vol);	// playing the sound effect

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
