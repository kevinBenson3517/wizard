#pragma strict

var text:String[];

// if you just want it to start immediately, just set ready to true in the inspector
var call_on_enter:boolean;
var call_on_press:boolean;

var ready:boolean = false;

var can_talk_again:boolean;

function Start () {
	// please make sure the following is a part of the scene with the same tags
	// also make sure that these are also active
	var textbox:GameObject = GameObject.FindWithTag("textbox");						//.GetComponent.<UI.Image>();
	var textbox_text:GameObject = GameObject.FindWithTag("textbox text");	//.GetComponent.<UI.Text>();
	var player:GameObject = GameObject.FindWithTag("player");
	var wizard:Wizard = player.GetComponent.<Wizard>();

	textbox.SetActive(false);
	textbox_text.SetActive(false);

	while(1){
		while (!ready)
			yield;

		print("ready");
		print(text.length);

		player.SendMessage("EnableDisablePlayer");
		textbox.SetActive(true);
		textbox_text.SetActive(true);

		for (var i=0; i<text.length; i++){
			textbox_text.GetComponent.<UI.Text>().text = text[i];
			yield WaitUntilButtonPress();
			yield WaitForSeconds(.01);	// probably not the best way to do this
		}

		print ("done");

		player.SendMessage("EnableDisablePlayer");
		textbox.SetActive(false);
		textbox_text.SetActive(false);

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
