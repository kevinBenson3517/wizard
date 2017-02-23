#pragma strict

var hit : AudioClip;

private var source : AudioSource; 

function Start () {
	source = GetComponent.<AudioSource>();
}

function OnCollisionEnter2D (coll : Collision2D) {
	source.PlayOneShot(hit, .5F);
}

