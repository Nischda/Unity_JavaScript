#pragma strict

var heart : Transform;
var playerBlock : Transform;


//HeartContainer
function DisplayHearts(numHeartsObject) {
    var numHearts = System.Convert.ToInt32( numHeartsObject );
    removeObjects("HeartContainer");
    
    for (var x = 0; x < numHearts; x++) {
        var heartInstance = Instantiate(heart, Vector3 (-3 + this.transform.position.x + 0.6 * x, this.transform.position.y, 0), Quaternion.identity );
        heartInstance.transform.parent = this.transform;
        heartInstance.name = "heartContainer";
    }
}

//PlayerBlockContainer
function DisplayPlayerBlocks(numPlayerBlocksObject) {
    var numPlayerBlocks = System.Convert.ToInt32( numPlayerBlocksObject );
    removeObjects("PlayerBlock");

    for (var x = 0; x < numPlayerBlocks; x++) {
        var playerBlockInstance = Instantiate(playerBlock, Vector3 (-3 + this.transform.position.x + 0.3 * x, this.transform.position.y - 0.5, 0), Quaternion.identity );
        playerBlockInstance.transform.parent = this.transform;
        playerBlockInstance.name = "playerBlockContainer";
    }
}

function removeObjects(tag) {
    var guiObjects = GameObject.FindGameObjectsWithTag(tag);
    for (var guiObject: GameObject in guiObjects) {
        Destroy(guiObject);
    }
}