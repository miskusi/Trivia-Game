
//////// Question Function //////////////

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

/////// Quiz Function ///////////////////
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}


/////// Questions ////////////////////////////
function populate () {
    if(quiz.isEnded() ) {
        // showScores()
    }
    else {
        // show question
        var element = document.getElementById("question");
          element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i< choices.length; i++) {
            var element = document.getElementById("buttons" + i);

        }
    }
}

var questions = [
    new Question ("What is the capital of Georgia?", ["Maine", "Delaware", "Oregon", "Atlanta"], "Atlanta"),
    new Question ("What is the capital of Maine?", ["Rhode Island", "Delaware", "Augusta", "Texas"], "Augusta"),
    new Question ("What is the capital of Kansas?", ["Little Rock", "Delaware", "Honolulu", "Atlanta" ], "Little Rock"),
    new Question ("What is the capital of Wisconsin?", ["Maine", "Tennessee", "Delaware", "Madison" ], "Madison"),
    new Question ("What is the capital of Colorado?", ["Maine", "Denver", "Washington", "Delaware" ], "Denver"),
]

var quiz = new Quiz(questions);

populate ();