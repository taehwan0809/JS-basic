const targetNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = 0;
let count = 0;
do{
    userGuess = parseInt(prompt("랜덤한 값을 입력 해주세요(1~100)"));
    count++;
    if(isNaN(userGuess) || userGuess > 100 || userGuess < 1){
        alert("제대로 된 값 입력");
        count--;
        continue;
    }
    if(targetNumber>userGuess){
        alert("더 큽니다");
    }else if(targetNumber<userGuess){
        alert("더 작습니다");
    } else{
        alert(`${count}번 만에 정답`)
    }
}while(userGuess != targetNumber)
