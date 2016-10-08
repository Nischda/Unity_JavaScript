#pragma strict

var player : PlayerBehavior;

function Start () {
}
function Update () {
}

function OnTriggerEnter2D(Other : Collider2D){

    if (Other.gameObject.CompareTag("Ground") || Other.gameObject.CompareTag("PlayerBlock")) {
        player.HitGround();
    }
    if(Other.gameObject.CompareTag("Monster")) {;
        player.Jump();
    }
    if(Other.gameObject.CompareTag("Dead")) {;
        player.Jump();
    }
}
