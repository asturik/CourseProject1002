// Reflection: (Phase Two)
// 1. What went well?
// I am really happy with how the webpage turned out. I'll be honest, most aspects 
// added to this I have previously done, so the creativity aspect was not as time 
// consuming as expected. The dark mode button, and the contact form interactivity 
// was pretty straight forward, so I was definetly pleased with that. 

// 2. What was challenging?
// The most challenging part was the "Show More" buttons. I had to do some 
// research to find out how to select the text right after the button, and how to 
// toggle the text on and off. I also had to figure out how to change the button 
// text when it was clicked, which was a bit tricky at first. Although this was
// challanging, now I know how to do it(Mostly), and I honestly had fun in the 
// process.

// 3. What can be added in the future?
// What I'd want to add is creating links for the "About", "Projects", and "Contact"
// Sections, so rather it be in one page, it'll be multiple. I'd also like to make
// it so that each time the form is submitted, I would get an email for it. Lastly, 
// Maybe making a video for the profile picture would be cool. Moreover, if the user
// clicks on the profile picture, it would play the video of me talking about myself.
// Maybe that is a bit far fetched, but it might be cool. 
//-------------------------------------------------------------------------------------


//=================
// Dark Mode Button
//=================

// Select the button
const darkModeBtn = document.getElementById("darkModeBtn");
//For the click event, toggle on and off
darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode"); 
});

//============================
// SHOW / HIDE PROJECT DETAILS
//============================

// Selects ALL buttons with the class "toggleBtn"
const toggleButtons = document.querySelectorAll(".toggleBtn");

// Loops through each button
toggleButtons.forEach(function (button) {

  // Adds a click event to each button
  button.addEventListener("click", function () {

    // Finds the text right after the button
    const extraInfo = this.nextElementSibling;
    // If the text is hidden, show the test block and change the button to "Show Less".
    if (extraInfo.style.display === "none") {
      extraInfo.style.display = "block";
      this.textContent = "Show Less";
    // If the text is visible, hide the text and change the button back to "Show More"
    } else {
      extraInfo.style.display = "none";
      this.textContent = "Show More";
    }

  });
});

//=====================
// CONTACT FORM MESSAGE
//=====================

// Select the form and message area
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// When form is submitted:
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); //Prevent page from refresh 
    formMessage.textContent ="Thank you for your message, " + document.getElementById("name").value + "!"; // Display message
    contactForm.reset(); // Clear the form
});
