#pragma strict

var hit : AudioClip;

private var source : AudioSource;

function Start () {
	source = GetComponent.<AudioSource>();
	source.PlayOneShot(hit, .5F);
}
