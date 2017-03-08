#pragma strict

function OnTriggerEnter2D (other: Collider2D) 
 { 
      if (other.tag == "player") 
      { 
          other.gameObject.GetComponent(Wizard).lives -=1;
		  print(other.gameObject.GetComponent(Wizard).lives);
      }
      else changeDirection();
 }

 function ChangeDirection(){
	speed = -speed;
	transform.localScale = Vector3.Scale(transform.localScale, Vector3(-1,1,1));
}