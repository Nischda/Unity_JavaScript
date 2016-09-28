#pragma strict

private var facingRight = true;
public var moveSpeed = 0f;
var child: Transform;

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

function OnTriggerEnter2D(Other : Collider2D){
     
    if(Other.gameObject.name == "Player"){

        child.GetComponent(Animator).SetTrigger("OnHit");
        gameObject.tag = "Dead";
        yield WaitForSeconds (0.5);
        gameObject.GetComponent(BoxCollider2D).enabled=false;
        Destroy (gameObject, 1);
    }

}