const questions = [
    {
        question: "What is CICD?",
        optionA: "Continuious Intergration Continuious Development / Deployment",
        optionB: "Countless Intergrations Counterproductive Developers",
        optionC: "Compute Intergers Corrupt Datasets",
        optionD: "Cloud Infrastructure Concurrent Data",
        correctOption: "optionA"
    },

    {
        question: "Whats the optimum Agile team?",
        optionA: "7 plus or minus 2",
        optionB: "up to 20",
        optionC: "12 plus or minus 3",
        optionD: "As many as needed",
        correctOption: "optionA"
    },

    {
        question: "What is is SCRUM?",
        optionA: "An Agile framework",
        optionB: "A a part of a rugby game",
        optionC: "A Lean methodology",
        optionD: "a two week period of time in which work happens",
        correctOption: "optionAD"
    },

    {
        question: "What is HotJar?",
        optionA: "A tool to provide data on website user behaviour",
        optionB: "A tool to provide velocity data",
        optionC: "A crum ceromony planning tool",
        optionD: "A jar that has been heated to over 30 degrees",
        correctOption: "optionA"
    },

    {
        question: "What is acceptance criteria?",
        optionA: "Non fuctional specifications that are hard to write down",
        optionB: "A tool to provide data on acceptance tests",
        optionC: "Infomration to specify what criteria must be met for somehting to be acceptable",
        optionD: "A list of things you like that are added to a ticket as you think about the problem during a sprint",
        correctOption: "optionC"
    },

    {
        question: "What is a user story?",
        optionA: "A user story is an informal, general explanation of a software feature written from the perspective of the end user or customer",
        optionB: "A story of why you build your product and how this will be delivered on time and on budget",
        optionC: "Agile RAID logs that describe bugs",
        optionD: "A list of stories users have had when using the product",
        correctOption: "optionA"
        //https://www.atlassian.com/agile/project-management/user-stories
    },

    {
        question: "What is a swim lane?",
        optionA: "Prince 2 swimlanes are documants that you produce that you save to your floppy disk",
        optionB: "Swimlanes are using end swimming pools to marked off areas for slow and fast swimmers",
        optionC: "Scrum swimlanes are vertical lines that split a Scrum boards into sections",
        optionD: "Kanban swimlanes are horizontal lines that split a Kanban board into sections",
        // https://kanbanize.com/kanban-resources/kanban-software/kanban-swimlanes 
        correctOption: "optionD"
        
    },

    {
        question: "What is VWO",
        optionA: "Visual Website Optimiser, MVT and AB testing tool",
        optionB: "Virtial Web Optimisation, MVT and AB testing tool",
        optionC: "Virtial Web Operations, deployment tool",
        optionD: "Very Weird Object, JS error message",
        correctOption: "optionA"
    },

    {
        question: "What is an AB test",
        optionA: "A test of many things to see what perfoms better",
        optionB: "An Analog Biomentric test, to make sure digital and analog can connect via APIs",
        optionC: "A test of two things, to see which performs better",
        optionD: "When you have two web pages that have the same duplicate content",
        correctOption: "optionD"
    },

    {
        question: "What is a story point",
        optionA: "The moral of the story, the reason why",
        optionB: "A size assigned to work",
        optionC: "The type of data the work is using, ie floating points",
        optionD: "The Fibonacci sequence",
        correctOption: "optionD"
    },

    {
        question: "What is velocity?",
        optionA: "The rate of change of position with respect to a frame of reference, and is a function of time",
        optionB: "Velocity is the total time estimates associated with user stories that were completed during an iteration.",
        optionC: "Velocity is the total effort estimates associated with user stories that were completed during an iteration.",
        optionD: "Faster than the speed of light",
        correctOption: "optionC"
        // https://www.agilealliance.org/glossary/velocity 
    },

    {
        question: "What is a time box?",
        optionA: "Time estimated on a sprint",
        optionB: "Time estimated on a ticket",
        optionC: "Time agreed on a sprint",
        optionD: "A timebox is a previously agreed period of time during which a person or a team works steadily towards completion of some goal.",
        correctOption: "optionD"
        // https://www.agilealliance.org/glossary/timebox/
    },


    {
        question: "What is Jira",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is Git",
        optionA: "Version Control Software",
        optionB: "An Agile framework",
        optionC: "A website that hosts repositories",
        optionD: "An anoying bug",
        correctOption: "optionA"
    },

    {
        question: "What is a repo?",
        optionA: "A debt collector",
        optionB: "A haloween costume",
        optionC: "A calofornian chilli",
        optionD: "A code repository",
        correctOption: "optionD"
    },

    {
        question: "What is stastical significance?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is empirical process control?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is a sprint?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is customer exerience and C stat?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "in CRO What is a control?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is CRO?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is Dev Ops?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is a roadmap?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is an epic",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },

    {
        question: "What is a sprint backlog?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    },
    
        {
        question: "What is a product backlog?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
