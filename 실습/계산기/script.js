function calculator(operator){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if(num1 === "" || num2 === ""){
        alert("숫자를 모두 입력해주세요");
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 === 0){
                alert("0으로는 나눌 수 없다");
                return;
            }
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerHTML = `${num1} ${operator} ${num2} = <span style ="color: red;">${result}</span>`;
}
function clearAll(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').textContent = "결과가 여기에 표시됩니다";

}