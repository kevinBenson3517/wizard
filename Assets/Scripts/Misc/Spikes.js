#pragma strict

function OnTriggerEnter2D (other: Collider2D) 
 { 
      if (other.tag == "player") 
      { 
          other.gameObject.GetComponent(Wizard).health -=10;
		  print("HIT");
      }
 }