#pragma strict

var enemy : EnemyBehavior;
function Start () {

}

function Update () {

}

function OnTriggerEnter2D (Other : Collider2D) {
    enemy.Flip();
}