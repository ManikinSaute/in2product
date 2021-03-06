const questions = [
    {
        question: "What is CICD?",
        optionA: "Continuious Intergration Continuious Development / Deployment",
        optionB: "Countless Intergrations Counterproductive Developers",
        optionC: "Compute Intergers Corrupt Datasets",
        optionD: "Cloud Infrastructure Concurrent Data",
        correctOption: "optionA",
        category: "Tech"
        // https://www.redhat.com/en/topics/devops/what-is-ci-cd
    },

    {
        question: "Whats the optimum agile team size accorinf to Jeff Sutherland creator of Scrum ?",
        optionA: "7 plus or minus 2",
        optionB: "up to 20",
        optionC: "12 plus or minus 3",
        optionD: "As many as needed",
        correctOption: "optionA",
        category: "Agile Scrum"
        // https://www.starttech.vc/blog/2018/agile-scrum-teams-for-peak-performance/ number taken from Scrum by Jeff Sutherland 
    },

    {
        question: "What is is scrum?",
        optionA: "An agile framework",
        optionB: "An agile methodology",
        optionC: "A Lean methodology",
        optionD: "A two week period of time in which work happens",
        correctOption: "optionA",
        category: "Agile Scrum"
        // https://www.atlassian.com/agile/scrum 
    },

    {
        question: "What is HotJar?",
        optionA: "A tool to provide data on website user behaviour",
        optionB: "A tool to provide velocity data",
        optionC: "A scrum ceromony planning tool",
        optionD: "A jar that has been heated to over 30 degrees",
        correctOption: "optionA",
        category: "Tools UX Research"
        // https://www.hotjar.com/tour/ 
    },

    {
        question: "What is acceptance criteria?",
        optionA: "Non fuctional specifications that are hard to write down",
        optionB: "A system to provide data on tests that pass the criteria",
        optionC: "Infomration to specify what criteria must be met for somehting to be acceptable",
        optionD: "A list of things you like that are added to a ticket as you think about the problem during a sprint",
        correctOption: "optionC",
        category: "Agile"
        // https://www.productplan.com/glossary/acceptance-criteria/
    },

    {
        question: "What is a user story?",
        optionA: "A user story is an informal, general explanation of a software feature written from the perspective of the end user or customer",
        optionB: "A story of why you build your product and how this will be delivered on time and on budget",
        optionC: "Agile RAID logs that describe bugs",
        optionD: "A list of stories users have had when using the product",
        correctOption: "optionA",
        category: "Agile"
        //https://www.atlassian.com/agile/project-management/user-stories
    },

    {
        question: "What is a swim lane?",
        optionA: "Prince 2 swimlanes are documents that you produce that you save to your floppy disk",
        optionB: "Swimlanes are using end swimming pools to marked off areas for slow and fast swimmers",
        optionC: "Scrum swimlanes are vertical lines that split a Scrum boards into sections",
        optionD: "Kanban swimlanes are horizontal lines that split a Kanban board into sections",
        correctOption: "optionD",
        category: "Agile Kanban"
        // https://kanbanize.com/kanban-resources/kanban-software/kanban-swimlanes 
        // https://en.wikipedia.org/wiki/Swim_lane
    },

    {
        question: "What is VWO?",
        optionA: "Visual Website Optimiser, MVT and AB testing tool",
        optionB: "Virtial Web Optimisation, MVT and AB testing tool",
        optionC: "Virtial Web Operations, deployment tool",
        optionD: "Very Weird Object, JS error message",
        correctOption: "optionA",
        category: "Tools Research UX"
        // https://vwo.com/ 
    },

    {
        question: "What is an A/B test?",
        optionA: "A test of many things to see what perfoms better",
        optionB: "An Analog Biomentric test, to make sure digital and analog can connect via APIs",
        optionC: "A test of two things, to see which performs better",
        optionD: "When you have two web pages that have the same duplicate content",
        correctOption: "optionC",
        category: "Research UX"
        // https://vwo.com/ab-testing/ 
    },

    {
        question: "What is a story point?",
        optionA: "The moral of the story, the reason why",
        optionB: "A size assigned to work",
        optionC: "The type of data the work is using, ie floating points",
        optionD: "The Fibonacci sequence",
        correctOption: "optionD",
        category: "Agile"
        // https://www.mountaingoatsoftware.com/blog/what-are-story-points 
    },

    {
        question: "What is velocity?",
        optionA: "The rate of change of position with respect to a frame of reference, and is a function of time",
        optionB: "Velocity is the total time estimates associated with user stories that were completed during an iteration.",
        optionC: "Velocity is the total effort estimates associated with user stories that were completed during an iteration.",
        optionD: "Faster than the speed of light",
        correctOption: "optionC",
        category: "Agile"
        // https://www.agilealliance.org/glossary/velocity 
    },

    {
        question: "What is a time box?",
        optionA: "Time estimated on a sprint",
        optionB: "Time estimated on a ticket",
        optionC: "Time agreed on a sprint",
        optionD: "A timebox is a previously agreed period of time during which a person or a team works steadily towards completion of some goal.",
        correctOption: "optionD",
        category: "Agile"
        // https://www.agilealliance.org/glossary/timebox/
    },


    {
        question: "What is Jira?",
        optionA: "A collection of bugs or issues",
        optionB: "Software that focuses on project management tool for agile teams",
        optionC: "You roadmap and backlog",
        optionD: "A conversion rate optimisatin tool",
        correctOption: "optionB",
        category: "Tools"
        // https://www.atlassian.com/software/jira 
    },

    {
        question: "What is Git?",
        optionA: "Version Control Software",
        optionB: "An Agile framework",
        optionC: "A website that hosts repositories",
        optionD: "An anoying bug",
        correctOption: "optionA",
        category: "Tools Tech"
        // https://git-scm.com/ 
    },

    {
        question: "What is a repo?",
        optionA: "A debt collector",
        optionB: "A haloween costume",
        optionC: "A calofornian chilli",
        optionD: "A code repository",
        correctOption: "optionD",
        category: "Tools Tech"
        // https://bitbucket.org/product/code-repository
    },

    {
        question: "What is stastical significance?",
        optionA: "A test result from data generated by testing or experimentation that is likely to occur randomly or by chance",
        optionB: "A result from a test or experimentation that needs to be re tested",
        optionC: "A really intresting finding that is significant",
        optionD: "A result from data generated by testing or experimentation is not likely to occur randomly or by chance",
        correctOption: "optionD",
        category: "Research"
        // https://www.investopedia.com/terms/s/statistical-significance.asp
    },

    {
        question: "In Scrum, what is empirical process control?",
        optionA: "Where people not involved in the team use theory to impose process controls",
        optionB: "Empiricism asserts that knowledge comes from experience and making decisions based on what is known. Transpareny, inspection and adaption.",
        optionC: "The control of processes by managment teams.",
        optionD: "Empiricism asserts that knowledge comes from senior managment based on the various theories they have studdieded. Documents, timlines and budgets.",
        correctOption: "optionB",
        category: "Agile Scrum"
        // https://scrumguides.org/scrum-guide.html 
    },

    {
        question: "What is a sprint?",
        optionA: "They are fixed length events of one month or less. A new Sprint starts immediately after the previous Sprint.",
        optionB: "The time after desiging software and besfore testing software where you write code.",
        optionC: "Working really fast whn behind on a dealine, sometimes you need to stay late",
        optionD: "A twoo week period, when you itterate your product.",
        correctOption: "optionB",
        category: "Agile Scrum"
        // https://www.scrum.org/resources/what-is-a-sprint-in-scrum 
    },

    {
        question: "What is a roadmap?",
        optionA: "A document produced by the cartographers for when cell towers are down",
        optionB: "A shared source of truth that outlines the vision, direction, priorities, and progress of a product over time.",
        optionC: "A scope docuamnt that lists all of the features you will ever need to build",
        optionD: "A shared wiki page that outlines the issues with the product over time.",
        correctOption: "optionB",
        category: "Agile"
        // https://www.atlassian.com/agile/product-management/product-roadmaps
    },

    {
        question: "What is an epic?",
        optionA: "A large body of work that can be broken down into a number of smaller stories",
        optionB: "Really big tickets that are too big for a sprint",
        optionC: "Big features",
        optionD: "A poem, usualy Greek mythology",
        correctOption: "optionA",
        category: "Agile"
        // https://www.atlassian.com/agile/project-management/epics 
    },

    {
        question: "What is a sprint backlog?",
        optionA: "A collection of all issues in the raodmap that you want to work on",
        optionB: "The process of quickly removing technical debt",
        optionC: "A list of all the bugs in the current itteration",
        optionD: "A set of product backlog items selected for the Sprint",
        correctOption: "optionC",
        category: "Agile Scrum"
        // https://www.scrum.org/resources/what-is-a-sprint-backlog
    },
    
        {
        question: "What is a product backlog?",
        optionA: "A list of everything that was in the project initaiaion documument",
        optionB: "An ordered list of everything that might be needed in the product",
        optionC: "All the bugs you know about",
        optionD: "All the work for the next sprint",
        correctOption: "optionB",
        category: "Agile Scrum"
        // https://www.scrum.org/resources/what-is-a-product-backlog
    }
    
    
/*

        {
        question: "What is definition of done?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC",
        category: "tech"
        
    },
    
        {
        question: "What is definition of ready?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC",
        category: "tech"
    },
    
        {
        question: "What is a typical user story ?",
        optionA: "As a ",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC",
        category: "tech"
    },
    
        {
        question: "What is customer exerience and C stat?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC",
        category: "tech"
    },
    
    {
        question: "in CRO What is a control?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC",
        category: "tech"
    },

    {
        question: "What is CRO?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC",
        category: "tech"
    },

    {
        question: "What is Dev Ops?",
        optionA: "x",
        optionB: "x",
        optionC: "x",
        optionD: "x",
        correctOption: "optionC",
        category: "tech"
    }

*/
    

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
            document.getElementById(wrongLabelId).style.backgroundColor = "#f5e6e6"
            document.getElementById(correctOption).style.backgroundColor = "#e8f5e6"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 3000)
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
