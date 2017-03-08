#pragma strict

function OnTriggerEnter2D (other: Collider2D) 
 { 
      if (other.tag == "player") 
      { 
          other.gameObject.GetComponent(Wizard).lives -=1;
		  print(other.gameObject.GetComponent(Wizard).lives);
      }
      else other.gameObject.GetComponent(Troll).ChangeDirection();
 }