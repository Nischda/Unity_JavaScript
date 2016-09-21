#pragma strict
//import System.Collections.Generic;

var heart : Transform;
var heartArray = new Array();

function SpawnHearts(maxHearts) {
    for (var x = 0; x < 5; x++) {
        heart = Instantiate(heart, Vector3 (x,this.transform.position.y, 0), Quaternion.identity);
        heart.transform.parent = this.transform;
        heart.name = "heartContainer";
        heartArray[x] = heart;
    }
}

function DisplayHearts(numHearts) {
    var y = 0;
    y++;
    Debug.Log("y =  " + y + " and type: " + typeof y);
    Debug.Log("numHearts =  " + numHearts + " and type: " + typeof numHearts);
    Debug.Log( y < System.Convert.ToInt32( numHearts ) );
    for(var x = 0; x < 5; x++) {
     //   heartArray[x].transform.GetChild(0);
    }
}