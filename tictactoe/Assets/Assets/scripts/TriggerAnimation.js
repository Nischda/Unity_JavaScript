var animator : Animator;

function OnTriggerEnter2D(Other : Collider2D){
     
    if(Other.gameObject.name == "Player"){

        animator.SetTrigger("OnHit");

        if(this.gameObject.tag == "Ground") {
            yield WaitForSeconds (5);
            animator.ResetTrigger("OnHit");
        }

        if(this.gameObject.tag == "Monster") {
            yield WaitForSeconds (0.5);
            transform.parent.gameObject.GetComponent(BoxCollider2D).enabled=false;
            Destroy (transform.parent.gameObject, 1);
        }
    }

}