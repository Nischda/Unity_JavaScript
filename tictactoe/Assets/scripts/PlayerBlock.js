#pragma strict

public var maxLifetime = 0;

function Start () {
    var player = GameObject.FindGameObjectsWithTag("Player");
    Debug.Log(player);
  //  player.numlayerBlocks += 1;
    Destroy(gameObject, maxLifetime); 
}

function Update () {
}