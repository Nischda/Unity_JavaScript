var animator : Animator;

function OnTriggerEnter2D(Other : Collider2D){
     
    if(Other.gameObject.name == "Player"){

        animator.SetTrigger("OnHit");

        if(this.gameObject.tag == "Ground") {
            yield WaitForSeconds (5);
            animator.ResetTrigger("OnHit");
        }

    }
}