#pragma strict

function OnTriggerEnter2D (hit : Collider2D){
	if (hit.gameObject.CompareTag("player")){
		hit.gameObject.SendMessage("AddMoney",1);
		Destroy(this.gameObject);
	}
}
