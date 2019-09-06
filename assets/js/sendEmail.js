// console.log("Hello"); //just testing if the script is linked correctly to the form

function sendMail(contactForm) {
    emailjs.send("gmail", "template1", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );

    return false; //to block from loading a new page
}
