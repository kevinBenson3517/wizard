#pragma strict

import UnityEngine.UI;

var hit_sound : AudioClip;

var taken : boolean = false;

private var source : AudioSource;

function Awake () {
	source = GetComponent.<AudioSource>();
}


function OnTriggerEnter2D (hit : Collider2D){
	if (hit.gameObject.CompareTag("player")){
		if (!taken){	// done such that the player can't take the coin twice before it's destroyed
			source.PlayOneShot(hit_sound, 1.0F); 	// play coin gain sound

			hit.gameObject.SendMessage("AddMoney",1);
			// in order for the coin gain sound to go off we need a delay before we destroy the coin.
			GetComponent.<Renderer>().enabled = false; // hides the coin until the sound finishes playing
			taken = true;
			yield WaitForSeconds(.4);
			Destroy(this.gameObject);
		}

	}
}
