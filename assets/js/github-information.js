function userInformationHTML(user) {
    return `
    <h2>${user.name}
        <span class = "small-name">
            (@<a href="${user.html_url} target="_blank">${user.login}</a>)
        </span>
    </h2>
    <div class="gh-content">
        <div class="gh-avatar">
            <a href= ${user.html_url} target="_blank">
                <img src="${user.avatar_url} width="80" height="80" alt="${user.login}" />
            </a>
        </div>
        <p>Followers: ${user.followers} - Following: ${user.following} <br> Repos: ${user.public_repos}</p>
    </div>`;
}


function fetchGitHubInformation(event) { //why event argument?

    var username = $("#gh-username").val(); //jquery selecting the #gh-username field and .val = the value in the field
    if (!username) { //if NOT username
        $("#gh-user-data").html(`<h2>Please enter a GitHub username.</h2>`); //sets html code to be displayed in case of empty field
        return; //stops the process. it only goes after the data once there's something in the field.
    }

    //to display the loader when #gh-user-data isn't empty
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..."/> 
        </div>`); //remember the ALT tag in case the image doesn't show.

    $.when( //PROMISES when() method takes a function as its first argument
            $.getJSON(`https://api.github.com/users/${username}`) //getJSON function ** Value for username from the input box
        ).then(
            function(response) { //function response which takes as first argument the RESPONSE that came back from our getJSON() method
                var userData = response; //store the response on this variable
                $("#gh-user-data").html(userInformationHTML(userData));
            },
            function(errorResponse) {
                if (errorResponse.status === 404) {
                    $("#gh-user-data").html(
                        `<h2>No info found for user ${username}</h2>`); //using template literals we can use the ${username}
                }
                else { //in case the error isn't a 404
                    console.log(errorResponse); //console.log the error response
                    $("#gh-user-data").html(
                            `<h2>Error: ${errorResponse.responseJSON.message}</h2>`); ///JSON response from our error variable response
            }
        });
}
