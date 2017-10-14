/**
 * Created by Сергей on 14.10.2017.
 */
function tabs(inside){
    var content;
    content = document.getElementsByClassName("tabs-panel");
    for(var i=0; i<content.length; i++){
       content[i].style.display = "none";
    }
    document.getElementById(inside).style.display = "grid";
}
