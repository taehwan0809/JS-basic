let myStudent = {
    name: "박태환",
    age: 18,
    grade: 2,
    classroom: "2-7",

    score: {
        korean: 84,
        english: 89,
        math: 11,
        science: 94
    },

    hobbies: ["음악 듣기", "게임 하기"],

    introduce: function(){
        return "이름은 " + this.name + "나이: " + this.age + "학년: " + this.grade + "학급: " + this.classroom
    },

    getAverage: function() {
        let sum = 0;
        let count = 0;
        for(let subject in this.score){
            sum += this.score[subject]
            count ++
        }

        return sum / count;
    },


    addhobby: function(hobby){
        this.hobbies.push(hobby)
    },


    getBestSubject: function(){
        let maxScore = -1;
        let maxSubject = "";
        for(let subject in this.score){
            if(maxScore<this.score[subject]){
                maxScore = this.score[subject];
                maxSubject = subject;
            }
        }
        console.log("젤 높은 점수의 과목은 " + maxSubject + "이고 점수는 " + maxScore+"입니다")
    }

};




myStudent.getBestSubject