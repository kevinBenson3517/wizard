#pragma strict
var DeathCanvas:Canvas;

print("in script!!!");
function onClick(){
	print("in func");
	transform.position = Vector3(1,1,0);
	DeathCanvas.enabled = false;
} 