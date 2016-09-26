﻿#pragma strict

private var facingRight = true;
public var moveSpeed = 0f;
function Start () {

}

function Update () {

    var x;
    var y;

    if (facingRight) {

        y = GetComponent(Rigidbody2D).velocity.y;
		
        GetComponent(Rigidbody2D).velocity = new Vector2(-moveSpeed, y);
    }

    if (!facingRight) {
        y = GetComponent(Rigidbody2D).velocity.y;
		
        GetComponent(Rigidbody2D).velocity = new Vector2(moveSpeed, y);
    }
} 

function OnCollisionEnter2D (coll : Collision2D) {
    if (!coll.gameObject.CompareTag("Ground")) {
        Flip();
    }

}


function Flip() {
    var flipScale : Vector3;
    var rigidbody : Rigidbody2D;
	
    rigidbody = GetComponent(Rigidbody2D);
	
    flipScale = rigidbody.transform.localScale;
    flipScale.x *= -1; // flip horizontally
	
    rigidbody.transform.localScale = flipScale;
	
    facingRight = !facingRight; // facing opposite direction
}
