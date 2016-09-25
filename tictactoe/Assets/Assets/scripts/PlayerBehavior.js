#pragma strict

public var jumpHeight = 0;
public var moveSpeed = 0;
public var maxJumps = 0; // maximum number of jumps
public var maxHearts = 0;
public var maxPlayerBlocks = 0;
public var activePlayerBlock = "";

private var facingRight = true; // initially sprite faces to the right
private var numJumps = 0; // number of current jumps
private var numHearts = 0;
private var numPlayerBlocks = 0;

private var x;
private var y;
private var timeStamp : float; // wonder if multiple use of timeStamp leads to shared cooldowns

var Gui : Gui;
var animator : Animator;
var staticPlayerBlock: Transform;
var flyingPlayerBlock: Transform;

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
    switch(activePlayerBlock) {
        case "static":
            Instantiate(staticPlayerBlock, Vector3 (this.transform.position.x +1, this.transform.position.y, 0), Quaternion.identity );
   
            break;
        case "flying":
            Instantiate(flyingPlayerBlock, Vector3 (this.transform.position.x +1, this.transform.position.y, 0), Quaternion.identity );
   
            break;
    } 
    numPlayerBlocks -= 1;
    Gui.DisplayPlayerBlocks(numPlayerBlocks);
}


//Passive
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
    if (coll.gameObject.CompareTag("Ground") || coll.gameObject.CompareTag("PlayerBlock")) {
        numJumps = 0;
        ChangeColor(1,1,1,1);
    }
    if(coll.gameObject.CompareTag("Enemy")) {
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
}

function ChangeColor(r,g,b,a) {
    var renderer = gameObject.GetComponent(SpriteRenderer); //somehow move into global variables or access component directly
    renderer.color = new Color(r,g,b,a);
}
  
//Get / Set
function IncrementNumPlayerBlocks(valueObject) {
    var value = System.Convert.ToInt32(valueObject);
    numPlayerBlocks += value;
    Gui.DisplayPlayerBlocks(numPlayerBlocks);
}
