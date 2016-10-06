#pragma strict

var child: Transform;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(Other : Collider2D){
    if(Other.gameObject.tag == "Player" || Other.gameObject.tag == "GlobalDmg"){

        child.GetComponent(Animator).SetTrigger("OnHit");
        gameObject.tag = "Dead";
        yield WaitForSeconds (0.1);
        //gameObject.GetComponent(BoxCollider2D).enabled=false;
        Destroy (gameObject, 0.5);
    }
}