//console에서 함수 입력
let mainTitle = document.getElementById("main-title");
let description = document.getElementById("description");
let infoBox = document.getElementById("info-box");


function changeContent(){
    mainTitle.textContent = "내용이 변경되었습니다!";
    description.innerHTML = "<strong>새로운 설명</strong>이 추가되었어요.";
    infoBox.innerHTML = "<h3>업데이트된 정보</h3><p>내용이 바뀌었습니다</p>";
}

function changeStyle(){
    mainTitle.style.color = "blue";
    mainTitle.style.fontSize = "40px";
    description.style.backgroundColor = "lightblue";
    infoBox.style.border = "3px solid red";
}


function greet(name){
    console.log(name + "님 안녕하세요");
}





