
//JS for the drop down menu.
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.add("show");
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

//Close the dropdown menu on mobile devices when user clicks outside of it
window.addEventListener("touchmove", function(event) {
    if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

//______________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________
//Sample JS for the Zipcode checker

var zipOne = {
    address: "200 E Grover St. Clarks Summit PA",
    zip: "18411",
    superName: "James Mirabelli",
    phone: "(570)-585-8223",
};
var search = document.getElementById("zipCodeSubmit");

//zipResult pulls the address, name, and phone number from the variable assigned to the zipcode being entered
function zipResult(){
    var switchRight = document.getElementById("interactiveRight");
    var answerContainer = document.getElementById("answerContainer");

    document.getElementById("answer1").textContent = "This is working : " + zipOne.address;
    document.getElementById("answer2").textContent = "This is working : " + zipOne.superName;
    document.getElementById("answer3").textContent = "This is working : " + zipOne.phone;

    //hides the input box and shows the returned information
    switchRight.classList.add("hide");
    answerContainer.classList.remove("hide");
}

//fires on the submit button click to run the code corresponding to the zip
search.addEventListener("click", function() {
        var userEnteredZip = document.getElementById("zipCodeDisplay").value;
        var entryLength = userEnteredZip.length;

        //Checking to see if the user entered a valid zip code based on the number of characters in the input
        if (entryLength === 5){
            //If the zip is a valid zipCode, compare it to the zip codes in our database
            if (userEnteredZip === zipOne.zip) {
                //Return the function to display the results
                zipResult();
                console.log("Works");
            //    If the zip code entered doesn't match one in our database
            } else {
                console.log("you suck");

            }

        //If the user input isn't a valid zipcode
        } else { alert("Please Enter A Valid Zip Code")}
    });

//______________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________
//Display the info for the social media icons in the footer

//Display FBPopUp Div
document.getElementById("fbPop").addEventListener("mouseover", function(){
    document.getElementById("fbPopDisplay").classList.remove("hide");
});
document.getElementById("fbPop").addEventListener("mouseout", function(){
    document.getElementById("fbPopDisplay").classList.add("hide");
});

//Display twPopUp Div
document.getElementById("twPop").addEventListener("mouseover", function(){
    document.getElementById("twPopDisplay").classList.remove("hide");
});
document.getElementById("twPop").addEventListener("mouseout", function(){
    document.getElementById("twPopDisplay").classList.add("hide");
});

//Display emailPopUp Div
document.getElementById("emailPop").addEventListener("mouseover", function(){
    document.getElementById("emailPopDisplay").classList.remove("hide");
});
document.getElementById("emailPop").addEventListener("mouseout", function(){
    document.getElementById("emailPopDisplay").classList.add("hide");
});