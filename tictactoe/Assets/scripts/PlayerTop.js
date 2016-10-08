#pragma strict

var player : PlayerBehavior;
private var timeStamp : float;
function Start () {
}
function Update () {
}

function OnTriggerEnter2D(Other : Collider2D){

    if(Other.gameObject.CompareTag("Enemy") || Other.gameObject.CompareTag("GlobalDmg")) {
        player.DamageFeedback();

        if (timeStamp <= Time.time) {
            player.IncrementNumHearts(-1);
            player.Alive();
            timeStamp = Time.time +1.5;
        }
    }
}