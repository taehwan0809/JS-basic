let students = ["박명순", "뽀로로"];


function addStudent(name){
    students.push(name)
}
function printStudents(){
    for (let i = 0; i < students.length; i++){
        console.log((i+1) + ". " + students[i]);
    }
}
function searchStudent(name){
    for(let i = 0; i<students.length; i++){
        if(students[i] === name){
            return "학생이 존재한다"
        }
    }
    return name + "님을 찾을 수 없습니다.";
}

function removeStudents(name){
    for(let i = 0; i<students.length; i++){
        if(students[i] === name){
            students.splice(i,1);
            console.log(name + "님이 명단에서 제거되었습니다.");
            return;
        }
    }
    return name + "님을 찾을 수 없습니다.";
    
}

function countStudent(){
    console.log(students.length)
}


addStudent("박태환");
printStudents();
console.log(searchStudent("뽀로로"));
removeStudents("박명순");
countStudent();