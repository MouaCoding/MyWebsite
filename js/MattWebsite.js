


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

function getYear(id) {
    var year = new Date().getFullYear();
    document.getElementById(id).innerHTML = Date();
}





//useful array methods: .indexOf - returns -1 if not in else returns index
//.join .concat

//for (var value in objectName){console.log(value, ": ", objectName[value]} Prints out the whole object and their values



//Jquery calls

/*
//Hide skills content until image is clicked
$('#efficientContent').hide();
$('#efficient').hover(function () {
    $('#efficientContent').fadeIn(1000);
});
$('#hardContent').hide();
$('#hardworker').hover(function () {
    $('#hardContent').fadeIn(1000);
});

$('#reliableContent').hide();
$('#reliable').hover(function () {
    $('#reliableContent').fadeIn(1000);
});

$('#responsiveContent').hide();
$('#responsive').hover(function () {
    $('#responsiveContent').fadeIn(1000);
});
*/

//Animate skills
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 2600) {
        $('#skillGroup').ready(function () {
            $('.js').css('width', '75%');
            $('.css').css('width', '65%');
            $('.html').css('width', '80%');
            $('.jquery').css('width', '75%');
            $('.android').css('width', '90%');
            $('.python').css('width', '75%');
            $('.c').css('width', '55%');
            $('.r').css('width', '70%');
            $('.firebase').css('width', '90%')
        });
    }
});

















