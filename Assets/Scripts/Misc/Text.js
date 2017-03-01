#pragma strict

var text:String[];

var ready:boolean = false;

function Start () {
	// please make sure the following is a part of the scene with the same tags
	// also make sure that these are also active
	var textbox:GameObject = GameObject.FindWithTag("textbox");						//.GetComponent.<UI.Image>();
	var textbox_text:GameObject = GameObject.FindWithTag("textbox text");	//.GetComponent.<UI.Text>();
	var player:GameObject = GameObject.FindWithTag("player");
	var wizard:Wizard = player.GetComponent.<Wizard>();

	textbox.SetActive(false);
	textbox_text.SetActive(false);

	while (!ready)
		yield;

	print("ready");
	print(text.length);

	wizard.can_move = false;
	wizard.jumping = true;
	textbox.SetActive(true);
	textbox_text.SetActive(true);

	for (var i=0; i<text.length; i++){
		textbox_text.GetComponent.<UI.Text>().text = text[i];
		yield WaitUntilButtonPress();
		yield WaitForSeconds(.01);	// probably not the best way to do this
	}

	print ("done");

	wizard.can_move = true;
	wizard.jumping = false;
	textbox.SetActive(false);
	textbox_text.SetActive(false);

}

function WaitUntilButtonPress(){
	while (!Input.GetButtonDown("Fire1"))
		yield;
	print("button pressed");
}


function OnTriggerEnter2D (hit : Collider2D){ 	//just some test code
	ready = true;
}
