alert("환영합니다");
console.log("첫 번째 js코드")
document.write("<p>페이지 출력</p>")


let score = 18;

let name = "박태환";
let hello = "안녕하세요"
console.log(typeof name);
console.log(name + hello);
let greet = `${hello}, ${name}`;

console.log(greet)



let a = 3;
switch (a){
    case 0:
        console.log("a는 0입니다");
        break;
    case 1:
        console.log("a는 1입니다");
        break;
    case 2:
        console.log("a는 2입니다");
        break;
    case 3:
        console.log("a는 3입니다");
        break;
    default:
        console.log("a는 0,1,2,3이 아닙니다");
        break;
}//비교문

let score2 = 100;
let message;
if(score === 100){
    message = "축하드립니다 100점이네요";
} else{
    message = "만점이 아닙니다";
}
//조건


let message1 = (score === 99) ? "축하드립니다" : "만점이 아닙니다";
//button a = (isLoggin) ? "로그아웃" : "로그인";


for(let i = 1; i<=5; i++){
    console.log("i:" + i)
}




let message2 = "semyeong";
for(let i = 0; i<message2.length; i++){
    console.log(message2[i])
}

let reversed = "";
for(let i = message2.length - 1; i >= 0; i--){
    reversed += message2[i];
}
console.log("거꾸로: " + reversed);



let i = 10;
while(i <5){
    console.log("while 실행 됨!");
}
do{
    console.log("do-while 실행 됨");
}while(i<5);


let score1 = prompt("점수 입력: ");
console.log(parseInt(score) + 10);
console.log(parseFloat(score) + 5.555);