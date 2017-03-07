#pragma strict

import UnityEngine.SceneManagement;

var text:String[];

// if you just want it to start immediately, just set ready to true in the inspector
var call_on_enter:boolean;
var call_on_press:boolean;

var ready:boolean = false;

var can_talk_again:boolean;

var load_scene_on_end:String;

var instant_appear:boolean;

var char_delay:float;
var button_held:boolean = false;

var char_exists:boolean;

function Start () {
	// please make sure the following is a part of the scene with the same tags
	// also make sure that these are also active
	var textbox:GameObject = GameObject.FindWithTag("textbox");						//.GetComponent.<UI.Image>();
	var textbox_text:GameObject = GameObject.FindWithTag("textbox text");	//.GetComponent.<UI.Text>();

	if(char_exists){
		var player:GameObject = GameObject.FindWithTag("player");
		var wizard:Wizard = player.GetComponent.<Wizard>();
		print(player);
	}

	textbox.SetActive(false);
	textbox_text.SetActive(false);

	while(1){
		while (!ready)
			yield;

		if (char_exists) {player.SendMessage("DisablePlayer");}
		textbox.SetActive(true);
		textbox_text.SetActive(true);

			for (var i=0; i<text.length; i++){
				textbox_text.GetComponent.<UI.Text>().text = "";
				if(instant_appear){
					textbox_text.GetComponent.<UI.Text>().text = text[i];
					yield WaitForSeconds(0.1);
				}
				else{
					// print characters one at a time
					for (var j=0; j<text[i].length; j++){
						textbox_text.GetComponent.<UI.Text>().text += text[i][j];
						yield WaitForSeconds(char_delay);
					}
				}
				yield WaitUntilButtonPress();
		}

		if (char_exists) {player.SendMessage("EnablePlayer");}
		textbox.SetActive(false);
		textbox_text.SetActive(false);

		if (load_scene_on_end != "")
			SceneManager.LoadScene(load_scene_on_end);

		if (!can_talk_again)
			break;

		ready = false;
	}


}

function WaitUntilButtonPress(){
	while (!Input.GetButtonDown("Fire1"))
		yield;
	print("button pressed");
}


function OnTriggerEnter2D (hit : Collider2D){ 	//just some test code
	if (call_on_enter)
		ready = true;
}

function OnTriggerStay2D(hit : Collider2D){
	if (call_on_press)
		if (Input.GetAxisRaw("Vertical") == 1)
			ready = true;
}
