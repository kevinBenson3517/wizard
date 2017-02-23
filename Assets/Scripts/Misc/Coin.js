#pragma strict

var hit_sound : AudioClip;

private var source : AudioSource; 

function Awake () {
	source = GetComponent.<AudioSource>();
}


function OnTriggerEnter2D (hit : Collider2D){
	if (hit.gameObject.CompareTag("player")){
		source.PlayOneShot(hit_sound, 1.0F); 	// play coin gain sound
		hit.gameObject.SendMessage("AddMoney",1);
		Destroy(this.gameObject);
	}
}
