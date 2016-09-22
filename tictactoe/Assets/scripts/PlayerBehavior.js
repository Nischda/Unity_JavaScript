﻿#pragma strict

public var jumpHeight = 0;
public var moveSpeed = 0;
public var maxJumps = 0; // maximum number of jumps
public var maxHearts = 0;

private var numJumps = 0; // number of current jumps
private var facingRight = true; // initially sprite faces to the right
private var numHearts = 0;

private var x;
private var y;
var Gui : Gui;

function Start () {
    numHearts = maxHearts;
    Gui.SpawnHearts(maxHearts);
}

function Update () {

    if (Input.GetKeyDown(KeyCode.Space) && CanJump()) {
        Jump();
        ++numJumps;
    }
	
    if (Input.GetKey (KeyCode.A)) {
        WalkLeft();
    }
	
    if (Input.GetKey (KeyCode.D)) {
        WalkRight();
    }
}

function Jump() {
    x = GetComponent(Rigidbody2D).velocity.x;
    GetComponent(Rigidbody2D).velocity = new Vector2(x, jumpHeight);
}

function WalkLeft() {
    y = GetComponent(Rigidbody2D).velocity.y;
    GetComponent(Rigidbody2D).velocity = new Vector2(-moveSpeed, y);
		
    if (facingRight) {
        Flip();
    }
}

function WalkRight() {
    y = GetComponent(Rigidbody2D).velocity.y;
    GetComponent(Rigidbody2D).velocity = new Vector2(moveSpeed, y);
		
    if (!facingRight) {
        Flip();
    }
}

function CanJump() {
    return numJumps < maxJumps;
}

// flip sprite along x-axis
function Flip() {
    var flipScale : Vector3;
    var rigidbody : Rigidbody2D;
	
    rigidbody = GetComponent(Rigidbody2D);
	
    flipScale = rigidbody.transform.localScale;
    flipScale.x *= -1; // flip horizontally
	
    rigidbody.transform.localScale = flipScale;
	
    facingRight = !facingRight; // facing opposite direction
}

function Alive() {
    if(numHearts <= 0) {
        GameOver();
    }
}

function GameOver() {
    SceneManager.LoadScene("menu");
}

function OnCollisionEnter2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("Ground")) {
        numJumps = 0;
    }
    if(coll.gameObject.CompareTag("Enemy")) {
        numHearts -=1;
        Gui.DisplayHearts(numHearts);
        Alive();
        Jump();
    }
    if(coll.gameObject.CompareTag("Monster")) {;
        Jump();
    }
}