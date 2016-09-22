var animator : Animator;

function OnTriggerEnter2D(Other : Collider2D){
     
    if(Other.gameObject.name == "Player"){

        animator.SetTrigger("OnHit");
        //not resetting yet 

        if(this.gameObject.tag == "Monster") {
            Destroy (transform.parent.gameObject, 1);
        }
    }
}