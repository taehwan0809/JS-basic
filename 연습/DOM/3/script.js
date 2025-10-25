function changeBackground(){
    let select = document.querySelector("select");
    document.body.style.backgroundColor = select.value;
}

function showMessage(){
    document.getElementById("message").style.display="block";
    document.getElementById("mouse").style.color="red";
}
function hideMessage(){
    document.getElementById("message").style.display="none";
    document.getElementById("mouse").style.color="black";
}
function onButton(){
    document.querySelector("button").style.backgroundColor = "lightgreen";

}

function liveSearch(){
    let input = event.target.value;
    document.getElementById("search-result").textContent =
        "검색어: " + input;
}