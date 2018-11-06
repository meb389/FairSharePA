/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropBtn')) {
        let dropdowns = document.getElementsByClassName("dropdownContent");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }});




//______________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________


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
