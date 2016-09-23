#pragma strict

var heart : Transform;

function SpawnHearts(maxHeartsObject) {
    var maxHearts = System.Convert.ToInt32( maxHeartsObject );
    DisplayHearts( maxHearts );
}

function DisplayHearts(numHeartsObject) {
    var numHearts = System.Convert.ToInt32( numHeartsObject );
    removeOldHearts();
    

    for (var x = 0; x < numHearts; x++) {
        var heartInstance = Instantiate(heart, Vector3 (-3 + this.transform.position.x + x, this.transform.position.y, 0), Quaternion.identity );
        heartInstance.transform.parent = this.transform;
        heartInstance.name = "heartContainer";
    }
}

function removeOldHearts() {
    var hearts = GameObject.FindGameObjectsWithTag("Heart");
    for (var heart: GameObject in hearts) {
        Destroy( heart );
    }
}