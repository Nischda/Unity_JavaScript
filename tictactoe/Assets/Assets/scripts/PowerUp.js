#pragma strict

public var powerUp = "";
var player : PlayerBehavior;

function Start () {
   // var playerBehavior = GameObject.FindWithTag("Player").GetComponent(PlayerBehavior);
}

function Update () {
}

function OnCollisionEnter2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("Player")) {
        // playerBehavior.activePlayerBlock = powerUp;  //COMMENT: playerBehavior is not known outside of Start();
        player.activePlayerBlock = powerUp;
        Destroy (gameObject);
    }
}