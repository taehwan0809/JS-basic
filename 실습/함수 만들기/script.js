function introduce(name,age){
    return "이름: " + name + "나이: " + age;
}

function calculator(num1,num2,operator){
    switch(operator){
        case "+":
            console.log( num1 + num2)
            break;
        case "-": 
            console.log(num1 - num2)
            break;
        case "*": 
            console.log(num1 * num2)
            break;
        case "/": 
            if(num2 === 0){
                return "0으로는 나눌 수 없습니다"
            }
            console.log(num1 / num2)
            break;
    }
    

}
console.log(introduce("박태환", 18));
calculator(4,23,"+");