//JavaScript Document
var $ = function (id) {
    return document.getElementById(id);
}
//declare word choice arrays
var wordChoice1 = ["JANUARY", "FEBRUARY", "MARCH", "APRIL","MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER","DECEMBER"]
var wordChoice2 = ["SHREWDNESS","CETE","CAULDRON","SLEUTH","OBSTINACY","CLOWDER","LITTER","PACE","PARADE","GANG","BUSINESS","LEASH","TOWER","TRIBE","BAND","BLOAT","CACKLE","TROOP","PRICKLE","AMBUSH","POD","PACK"]
var wordChoice3 = ["SEDGE","WAKE","CHAIN","COVER","GULP","MURDER","TRIP","DULE","CONVOCATION","CHARM","STAND","FLOCK","CAST","PARTY","BUILDING","HOST","DESCENT"]
var wordChoice4 = ["AMERICA", "RUSSIA", "UKRAINE", "AFGHANISTAN","ALBANIA","ALGERIA","ANGOLA","ARGENTINA","GUYANA","VIETNAM","MONACO","MEXICO","CANADA","SAUDI ARABIA","MALTA","POLAND","SYRIA"]

//declare category choice categories as 'catChoices'
var catChoices = ["wordChoice1","wordChoice2","wordChoice3","wordChoice4"]
//randomly select a category for focus by its index number...(also assumes total category count is always FOUR)
var catChoicesIndex = Math.floor(Math.random()*4);
var catChoice = catChoices[catChoicesIndex];
console.log(catChoice);

//initialize array for word choice category number 1
if (catChoice === "wordChoice1") {
    var wordChoiceIndex = Math.floor(Math.random()*(wordChoice1.length));
    var wordChoiceChoice = wordChoice1[wordChoiceIndex];
    console.log(wordChoiceChoice);
}    
else if (catChoice === "wordChoice2") {
    var wordChoiceIndex = Math.floor(Math.random()*(wordChoice2.length));
    var wordChoiceChoice = wordChoice2[wordChoiceIndex];
    console.log(wordChoiceChoice);

}
else if(catChoice === "wordChoice3") {
    var wordChoiceIndex = Math.floor(Math.random()*(wordChoice3.length));
    var wordChoiceChoice = wordChoice3[wordChoiceIndex];
    console.log(wordChoiceChoice);
}
else if(catChoice === "wordChoice4") {
    var wordChoiceIndex = Math.floor(Math.random()*(wordChoice4.length));
    var wordChoiceChoice = wordChoice4[wordChoiceIndex];
    console.log(wordChoiceChoice);
}
//get the character length of the chosen word and store in myLength
var myLength = wordChoiceChoice.length;
console.log(myLength)

//declare the var to display the underlines on the screen from the myLength and var for max tries 
var lineDisplay = [myLength];
//declare win count determined by myLength which is the character length of the system chosen word
var win = myLength;
//split the system selected word into its individual characters and store in a separate var 
var letters = wordChoiceChoice.split('');
//sets the number of attempts the user will have to guess letter contained in the system selected word
var attemptsLeft = 20;
var output = " ";
var userLetter = "";


console.log(letters)

var setup = function()
//sets the display array for the underscore quantity (blank lines)
{
    for (var i=0; i< wordChoiceChoice.length; i++)
    {
        lineDisplay[i] = "_ ";
        output = output + lineDisplay[i];   
    }
    document.getElementById("game").innerHTML = output;
    Output ="";
}


var submit = function()
{
    output = "";
    userLetter=$("letter").value;
    $("letter").value="";

    //steps through a loop for each answer to see if it matches the users input
    for (var c=0; c< wordChoiceChoice.length; c++)
    {
        //testing code to check for correct display alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c])
        {
            lineDisplay[c] = userLetter.toUpperCase();
            //subtracts one count from the number (negative number) needed to win
            win--;
        }
            output = output + lineDisplay[c] + " ";
    }
    document.getElementById("game").innerHTML = output;
    output="";
    attemptsLeft--;

    //win count determined by myLength which is the character length of the system chosen word
    if (win<1)
    {
        document.getElementById("usergamestate").innerHTML = "YOU WIN!!!";
    }
    else if (attemptsLeft < 1)
    {
        document.getElementById("usergamestate").innerHTML = "YOU LOSE!!! The correct word was: ";
        document.getElementById("correctword").innerHTML = wordChoiceChoice;
        document.getElementById("letter").disabled = true;

    }
    else
    {

        document.getElementById("usergamestate").innerHTML = "You have " + attemptsLeft + " guesses left";
    }

}



window.onload = function()
{
    setup();
    $("letter").onkeyup = submit;
    
}