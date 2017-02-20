#pragma strict

var speed:float;

function Start () {


}

function Update () {
	transform.position.x += -speed;
}

function OnCollisionEnter2D(col:Collision2D)
{	Application.LoadLevel("GameOver1");	//THIS
	if(col.gameObject.tag=="fireball")
	{
		GetComponent.<Renderer>().enabled = false;
		Destroy(gameObject);
	}
}