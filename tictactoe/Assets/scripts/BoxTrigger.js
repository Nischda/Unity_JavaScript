#pragma strict

public var triggerable = true;
var animator : Animator;
var spriteRenderer : SpriteRenderer;
var sprite : Sprite;
function Start () {

}

function Update () {

}

function OnTriggerEnter2D (Other : Collider2D) {
     
    if(Other.gameObject.tag == "PlayerTop"){
        spriteRenderer.sprite = sprite;
        animator.SetTrigger("OnHit");
        Debug.Log(sprite);
        if(triggerable) {
            triggerable = false;
            //add event
        }
    }
}