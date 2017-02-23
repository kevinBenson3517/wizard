#pragma strict

function Start () {
	
}

function Update () {
	transform.position = new Vector3(transform.position.x, Mathf.Clamp (transform.position.y, 1.8,1.8), transform.position.z);
}
