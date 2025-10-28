function checkAnswers() {
    // Function to check answers will be implemented here
    let questions = [
        { question: "What is the capital of USA?", answer: "Washington D.C." },
        { question: "What is 2+2?", answer: "4" },
        { question: "What is color of sky?", answer: "Blue" }
    ];

    let userAnswer = [
        document.getElementById("q1").value,
        document.getElementById("q2").value,
        document.getElementById("q3").value
    ];

    let output = "<ol>";
    for (let i = 0; i < questions.length; i++) {
        let result = "";

        if (questions[i].answer.toLowerCase() === userAnswer[i].toLowerCase()) {
            result = "Correct";
        } else {
            result = "Incorrect";
        }

        output += "<li>" + questions[i].question + "<br> Your answer: " + userAnswer[i] + "<br> Result: " + result + "</li><br>";

        console.log("Question:", questions[i].question);
        console.log("User Answer:", userAnswer[i]);
        console.log("Result:", result);
    }
    output += "</ol>";

    document.getElementById("quizOutput").innerHTML = output;
}