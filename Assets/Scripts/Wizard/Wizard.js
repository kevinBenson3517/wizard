#pragma strict
import UnityEngine.UI;


var money:int = 0;	// money
var countMoney : String;
var gui_money:UI.Text;

var DeathCanvas:Canvas;
var jumping:boolean = false;
var can_double_jump = true;
var can_move:boolean = true;
var can_jump:boolean = true;	//separate variable for the sake of the textbox; jumping can be set to false as soon as the player collides with the ground, so the player could jump again


var fireball:GameObject;
var gravityball:GameObject;

var can_cast_fireball = true;
var can_cast_gravityball = true;
var can_cast_slowdown = true;

var time_since_last_fireball:float;

var fireball_cooldown:float;

var currentDir:boolean = true; // Right is true, left is false

var speed:float = 0.25;
var jumpForce:int;
var health:int;
var width:Vector3;

var lives : int;	// lives


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
	lives = 3;
	DeathCanvas.enabled = false;
	AddMoney(0);
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
				GetComponent.<Animator>().Play("wizardWalkRight");
			}
		}
		else if(x<0){
			if(currentDir != false){
				transform.localScale =  Vector3.Scale(transform.localScale, Vector3(-1,1,1));
				currentDir = false;
				GetComponent.<Animator>().Play("wizardWalkRight");
			}
		}
		else {
			GetComponent.<Animator>().Play("WizardStandStill");
		}
	}
}

function Jump(){
	if (!jumping && can_jump){
		if ((Input.GetButtonDown("Jump") || Input.GetButtonDown("Fire1"))){
			GetComponent.<Rigidbody2D>().velocity = Vector2(0,0);
			GetComponent.<Rigidbody2D>().AddForce(Vector3.up*jumpForce);
			jumping = true;
			jump_source.PlayOneShot(jump_sound, .5);
		}
	}
	else{
		if (can_double_jump){
			if ((Input.GetButtonDown("Jump") || Input.GetButtonDown("Fire1"))){
				can_double_jump = false;
				GetComponent.<Rigidbody2D>().velocity = Vector2(0,0);
				GetComponent.<Rigidbody2D>().AddForce(Vector3.up*jumpForce);
				jump_source.PlayOneShot(jump_sound, .5);
			}
		}
	}
}

function Fire(){
	//todo: cooldown
	var location:Vector3 = transform.position + width;
	if (currentDir == false)
		location -= transform.right + width;
	if (can_cast_fireball){
		if (Input.GetButtonDown("Fire2") && (Time.time - time_since_last_fireball > fireball_cooldown)){
			// sfx for fireball shoot:
			var vol : float = Random.Range(volLowRange, volHighRange); // randomizes vol to make more interesting
			shoot_source.PlayOneShot(shoot_sound, vol);	// playing the sound effect

			var obj:GameObject = Instantiate(fireball,location,Quaternion.identity);
			if (currentDir == false){
				obj.transform.localScale =  Vector3.Scale(obj.transform.localScale, Vector3(-1,1,1));
				obj.GetComponent.<fireball>().speed *= -1;
			}
			time_since_last_fireball = Time.time;
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
	if (hit.gameObject.tag == "Untagged" && can_jump){
		jumping = false;
		can_double_jump = true;
	}

	if (hit.gameObject.tag == "coin") {
		AddMoney(money);
	}

	if (hit.gameObject.CompareTag("troll") || hit.gameObject.CompareTag("hazard") || hit.gameObject.CompareTag("boss_fireball") || hit.gameObject.CompareTag("dragon"))
	{
		print(hit.gameObject.tag);
		lives -= 1;
		print(lives);
		if(lives<=0){
			death();
		}
	}

}


function AddMoney(amount : int) {
	if (amount == 0){
		countMoney = "Coins: 0";
	}
	else {
		money++;
		gui_money.text = "Coins: " + money.ToString();
	}
}

function DisablePlayer(){
	can_move = false;
	can_jump = false;
	can_double_jump = false;
	can_cast_fireball = false;
	can_cast_slowdown = false;
	can_cast_gravityball = false;
}

function EnablePlayer(){
	can_move = true;
	can_jump = true;
	can_double_jump = true;
	can_cast_fireball = true;
	can_cast_slowdown = true;
	can_cast_gravityball = true;
}

function death(){
	Time.timeScale = 0;
	money -=10;
	DeathCanvas.enabled = true;
	lives = 3;
}