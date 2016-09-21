#pragma strict

import UnityEngine.SceneManagement;

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}

function Update () {
    if(Input.GetMouseButtonDown(0)) {
        ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(ray, hit)) {
            if(hit.transform.name == "option1") {

            }
            else if(hit.transform.name == "startGame") {
                SceneManager.LoadScene("game");
            }
        }
    }
}