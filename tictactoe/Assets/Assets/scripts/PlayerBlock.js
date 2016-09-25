#pragma strict

public var maxLifetime = 0;
//var playerBehavior : PlayerBehavior;

function Start () {
    var playerBehavior = GameObject.FindWithTag("Player").GetComponent(PlayerBehavior);

    yield WaitForSeconds(maxLifetime);
    playerBehavior.IncrementNumPlayerBlocks(1);
    Destroy (gameObject);
}

function Update () {
}