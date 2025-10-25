function sayHello(){
    alert("안녕하세요 반갑습니다")
}

function sayGoodbye(){
    alert("안녕히 가세요 좋은 하루 되세요~")
}


function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}


function changeTitle(newTitle){
    document.getElementById("main-title").textContent = newTitle;
}
function toggleMessage(){
    let message = document.getElementById("message");
    if(message.style.display === "none"){
        message.style.display = "block";
    } else{
        message.style.display = "none";
    }
}

function processInput(){
    let userValue = document.getElementById("user-input").value;
    alert("입력하신 값 :" + userValue);
    document.getElementById("user-input").value = "";
}