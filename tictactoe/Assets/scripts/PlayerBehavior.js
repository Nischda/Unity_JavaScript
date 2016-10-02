#pragma strict

public var jumpHeight = 0;
public var moveSpeed = 0;
public var maxJumps = 0; 
public var maxHearts = 0;
public var maxPlayerBlocks = 0;
public var activePlayerBlock = "";

private var facingRight = true; 
private var numJumps = 0;
private var numHearts = 0;
private var numPlayerBlocks = 0;
private var x : float;
private var y : float;
private var timeStamp : float; // wonder if multiple use of timeStamp leads to shared cooldowns

var Gui : Gui;
var animator : Animator;
var playerBlock_Static: Transform;
var playerBlock_Flying: Transform;
var playerBlock_Spiked: Transform;
var flipScale : Vector3;

function Start () {

    numHearts = maxHearts;
    Gui.DisplayHearts(maxHearts);
    numPlayerBlocks = maxPlayerBlocks;
    Gui.DisplayPlayerBlocks(maxPlayerBlocks);
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

    if (Input.GetKey (KeyCode.E)) {
        if(numPlayerBlocks > 0 ) {
            if (timeStamp <= Time.time) {
                timeStamp = Time.time +0.15;
                SpawnBlock();
            }
        }
    }
}

//Actions
function Jump() {
    x = GetComponent(Rigidbody2D).velocity.x;
    GetComponent(Rigidbody2D).velocity = new Vector2(x, jumpHeight);
    animator.SetTrigger("OnJump");
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

function SpawnBlock() {
	var offset = facingRight ? 0.5 : -0.5;
    switch(activePlayerBlock) {
        case "static":
            Instantiate(playerBlock_Static, Vector3 (this.transform.position.x + offset, this.transform.position.y, 2), Quaternion.identity );
            break;

        case "flying":
            Instantiate(playerBlock_Flying, Vector3 (this.transform.position.x + offset, this.transform.position.y, 2), Quaternion.identity );
            break;

        case "spiked":
            Instantiate(playerBlock_Spiked, Vector3 (this.transform.position.x + offset, this.transform.position.y, 2), Quaternion.identity );
            break;
    } 
    numPlayerBlocks -= 1;
    Gui.DisplayPlayerBlocks(numPlayerBlocks);
}


//Passive
function Flip() {
    var rigidbody : Rigidbody2D;
    rigidbody = GetComponent(Rigidbody2D);
	
    flipScale = rigidbody.transform.localScale;
    flipScale.x *= -1; 
    GetComponent(SpriteRenderer).flipX = facingRight;
    rigidbody.transform.localScale = flipScale;
    facingRight = !facingRight; 
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
    if (coll.gameObject.CompareTag("Ground") || coll.gameObject.CompareTag("PlayerBlock") || coll.gameObject.CompareTag("Obstacle")) {
        numJumps = 0;
        ChangeColor(1,1,1,1);
    }
    if(coll.gameObject.CompareTag("Enemy") || coll.gameObject.CompareTag("GlobalDmg")) {
        ChangeColor(0.6, 0, 0, 1);
        Jump();

        if (timeStamp <= Time.time) {
            numHearts -=1;
            Gui.DisplayHearts(numHearts);
            Alive();
            timeStamp = Time.time +1.5;
        }
    }
    if(coll.gameObject.CompareTag("Monster")) {;
        Jump();
    }
    if(coll.gameObject.CompareTag("Dead")) {;
        Jump();
    }
}

function ChangeColor(r,g,b,a) {
    var renderer = gameObject.GetComponent(SpriteRenderer); //somehow move into global variables or access component directly
    renderer.color = new Color(r,g,b,a);
}
  
//Get | Set
function IncrementNumPlayerBlocks(valueObject) {
    var value = System.Convert.ToInt32(valueObject);
    numPlayerBlocks += value;
    Gui.DisplayPlayerBlocks(numPlayerBlocks);
}
