#pragma strict
import System.Collections.Generic;

var heart : Transform;
var heartArray = new ArrayList(); 

function SpawnHearts(maxHeartsObject) {
    var maxHearts = System.Convert.ToInt32( maxHeartsObject );

    for (var x = 0; x < maxHearts; x++) {
        Debug.Log(x);
        heart = Instantiate(heart, Vector3 (-3 + x,this.transform.position.y, 0), Quaternion.identity);
        heart.transform.parent = this.transform;
        heart.name = "heartContainer";
      //  heartArray[x] = heart; //        heartArray.Add(heart);
    }
}

function DisplayHearts(numHeartsObject) {
    var numHearts = System.Convert.ToInt32( numHeartsObject );
    
    Debug.Log("numHearts =  " + numHearts);
    for(var x = 0; x < numHearts; x++) {
       // Debug.Log(heartArray[0].name);
        //var heart = heartArray[x].GetComponentsInChildren.<SpriteRenderer>();
    }
}