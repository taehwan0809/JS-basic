let score = 90;
let attandance = 95;
let graduate = true;
if(attandance<33){
    graduate = false;
}
let grade;
if(!graduate){
    grade = 'F';
}else if(score >= 90){
    grade = 'A';
}else if(score >= 80){
    grade = 'B';
}else if(score >= 70){
    grade = 'C';
}else{
    grade = 'D';
}
console.log(grade);