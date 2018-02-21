

function add(x, y)
{
    return x + y;
}

function substitute() {
    var myValue = document.getElementById('myTextBox').value; //Gets the value of the element by its id
    //Get the id named myTextBox below
    if (myValue.length == 0) //if the number of characters equal 0
    {
        alert('Please enter a real value in the text box.'); //Warn user if nothing is entered
        return;
    }
    var myTitle = document.getElementById('title');
    myTitle.innerHTML = myValue;
}

function linkedinConfirm() {
    if (confirm('Do you want to go to Matthew\'s LinkedIn?')) {
        window.location = 'https://www.linkedin.com/in/matthew-moua-545090122/';
    } else {
        return false;
    }
}
function githubConfirm() {
    if (confirm('Do you want to go to Matthew\'s Github?')) {
        window.location = 'https://github.com/mouacoding';
    } else {
        return false;
    }
}

function getYear() {
    var year = new Date().getFullYear();
    return year;
}


//useful array methods: .indexOf - returns -1 if not in else returns index
//.join .concat

//for (var value in objectName){console.log(value, ": ", objectName[value]} Prints out the whole object and their values

function quiz() {
    var a;
    var correctAnswers=0;
    var questions = [
        {
            question: "What is 1?",
            answer: "1"
        },
        {
            question: "What is 2?",
            answer: "2" 
        }
    ];
    for (i = 0; i < questions.length; i++) {
        a = prompt(questions[i].question);
        if (a === questions[i].answer)
            correctAnswers++;
    }
    document.write("You've got " + correctAnswers + " answer(s) right!");
}
//quiz();





