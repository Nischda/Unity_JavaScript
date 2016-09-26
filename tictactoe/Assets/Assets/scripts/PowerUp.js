#pragma strict

public var powerUp = "";

function Start () {
    var playerBehavior = GameObject.FindWithTag("Player").GetComponent(PlayerBehavior);
}

function Update () {
}

function OnCollisionEnter2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("Player")) {
       // playerBehavior.activePlayerBlock = powerUp;  //COMMENT: playerBehavior is not known outside of Start();
        Destroy (gameObject);
    }
}