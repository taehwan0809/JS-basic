alert("환영합니다");
console.log("첫 번째 js코드")
document.write("<p>페이지 출력</p>")



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
if(score2 === 100){
    message = "축하드립니다 100점이네요";
} else{
    message = "만점이 아닙니다";
}
//조건


let message1 = (score2 === 99) ? "축하드립니다" : "만점이 아닙니다";
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
console.log(parseInt(score1) + 10);
console.log(parseFloat(score1) + 5.555);


function greet2(name){
    console.log("안녕하세요, " + name + "님!");
}
greet2("철수")   //철수는 argument(인수)




function add(a,b){
    return a+b;
}

let result = add(3,5);
console.log(result);


const add2 = (a,b) => a + b;
//람다 표현식, 중괄호를 없애면 자동 리턴
console.log(add2(6,2))


// 스프레드 연산자(...)
//배열의 요소를 하나씩 펼쳐놓는 것.

//arr1 = [1,2,3]
//...arr1 => 1,2,3

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(...arr1,...arr2);




let fruits = ["사과", "바나나", "오렌지"];
console.log(fruits.length);

//끝에 추가
fruits.push("포도");
//사과 바나나 오렌지 포도

//앞에 추가
fruits.unshift("딸기");
//딸기 사과 바나나 오렌지 포도

//끝에서 제거
fruits.pop();
//포도 제거

//앞에서 제거
fruits.shift();
//딸기 제거

//1번 인덱스부터 1개 제거하고 키위 추가
fruits.splice(1,1,"키위");

console.log(fruits)



//객체와 메서드
let student = {
    name: "김철수",
    age: 16,
    grade: 1,

    introduce: function(){
        return "안녕하세여 저는 " + this.name + "이고, " +
            this.age + "살" + this.grade + "학년입니다.";
    },

    study: function(subject){
        return this.name + "이(가)" + subject + "를(을) 공부합니다"
    },

    birthday: function(){
        this.age += 1;
        return this.name + "이(가) " + this.age + "살이 되었습니다";
    }
};

console.log(student.birthday());



