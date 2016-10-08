var animator : Animator;

function OnTriggerEnter2D(Other : Collider2D){
     
    if(Other.gameObject.tag == "Player" || Other.gameObject.tag == "PlayerBlock"){


        if(this.gameObject.tag == "Ground") {
            yield WaitForSeconds (5);
            animator.ResetTrigger("OnHit");
        }

    }
}