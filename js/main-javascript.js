//     On page load: Display a "loading..." message
// $(document).ready( function() {
//     $jAlert('Example of a basic alert box in jquery', 'jquery basic alert box');
// });

$(document).ready(function () {
//     alert('Loading');
// });

// Make an AJAX request to get a listing of all the movies

    $.ajax("https://cotton-ivy-lantana.glitch.me/movies").done(function (data) {
        // alert("Loading");


        let HTML = "";
        console.log(data)
        data.forEach(function (movies) {
            // for (var i =1; i<= movies.length; i++) {
            HTML = "<h1>" + movies.title + "</h1>"
                + "<h4>" + movies.title + "</h4>"
                + "<h3>" + movies.rating + "</h3>";
            // }

            // HTML = "<h1>" + movies.title + "</h1>"
            // // + "<h4>" + movies.title + "</h4>"
            // // + "<h3>" + movies.rating + "</h3>";

            $("#MainContent").append(HTML);

        })

    })
// When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives

    // $.ajax({
    //     type: "POST",
    //     body: JSON.stringify("rating", "title"),
    //     url: "https://cotton-ivy-lantana.glitch.me/movies",
    //     success: function(data) {
    //         $("#MainContent").html(data.text);
    //     },
    //     error: function(XMLHttpRequest, textStatus, errorThrown) {
    //         debugger;
    //     }
    // });

    // const addedMovie = {
    //     id: 6,
    //     title: 'Full Metal Jacket',
    //     rating: 5,
    // };
    //
    const url = 'https://cotton-ivy-lantana.glitch.me/movies';
    // const options = {
    //     method: 'POST',
    //     body: JSON.stringify(addedMovie),
    // };
    // fetch(url, options)
    //     .then( response => console.log(addedMovie) ) /* review was created successfully */
    //     .catch( error => console.error(error) ); /* handle errors */


// Allow users to add new movies

// Create a form for adding a new movie that has fields for the movie's title and rating
    $("#movieSubmit").click(function (e) {
        e.preventDefault()
        let movieName = $('#movieName').val();
        let movieRating = $("#rating").val();
        // console.log(movieName)
        // console.log(movieRating)
        let movieObject = {
            "title": movieName,
            "rating": movieRating,
        }
        console.log(movieObject)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieObject),
        };

        fetch(url, options)
            .then(response => {
                response.json().then(function (data) {
                    console.log(data)
                })
            }) /* review was created successfully */
            .catch(error => console.error(error)); /* handle errors */
    })
})


// $('#button').click(movieInput);
// When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

// Allow users to edit existing movies

// Give users the option to edit an existing movie

// A form should be pre-populated with the selected movie's details

// Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

// Delete movies

// Each movie should have a "delete" button

// When this button is clicked, your javascript should send a DELETE request

