//               //     On page load: Display a "loading..." message
// // $(document).ready( function() {
// //     $jAlert('Example of a basic alert box in jquery', 'jquery basic alert box');
// // });
//
// $(document).ready(function () {
// //     alert('Loading');
// // });
//
// // Make an AJAX request to get a listing of all the movies
//
//
//
//     $.ajax("https://cotton-ivy-lantana.glitch.me/movies").done(function (data) {
//         // alert("Loading");
//
//
//         let HTML = "";
//         console.log(data)
//         data.forEach(function (movies) {
//             // for (var i =1; i<= movies.length; i++) {
//             HTML = "<h1>" + movies.title + "</h1>"
//                 + "<h4>" + movies.title + "</h4>"
//                 + "<h3>" + movies.rating + "</h3>";
//             // }
//
//             // HTML = "<h1>" + movies.title + "</h1>"
//             // // + "<h4>" + movies.title + "</h4>"
//             // // + "<h3>" + movies.rating + "</h3>";
//
//             $("#MainContent").append(HTML);
//
//         })
//
//     })
// // When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives
//
//
//     const url = 'https://cotton-ivy-lantana.glitch.me/movies';
//
//
//
// // Allow users to add new movies
//
// // Create a form for adding a new movie that has fields for the movie's title and rating
//     $("#movieSubmit").click(function (e) {
//         e.preventDefault()
//         let movieName = $('#movieName').val();
//         let movieRating = $("#rating").val();
//         // console.log(movieName)
//         // console.log(movieRating)
//         let movieObject = {
//             "title": movieName,
//             "rating": movieRating,
//         }
//         console.log(movieObject)
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(movieObject),
//         };
//
//         fetch(url, options)
//             .then(response => {
//                 response.json().then(function (data) {
//                     console.log(data)
//                 })
//             }) /* review was created successfully */
//             .catch(error => console.error(error)); /* handle errors */
//     })
// })
//
//
// // $('#button').click(movieInput);
// // When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form
//
// // Allow users to edit existing movies
//
//               // PUT to the resource with id = 5 to change the name of task
//               // fetch('https://cotton-ivy-lantana.glitch.me/movies', {
//               //     method: 'PUT',
//               // body: JSON.stringify(movieObject),
//               //     "title": "movieName",
//               //     "rating": "rating",
//               //     completed: false
//               // })
//               // const options = {
//               //     method: 'PUT',
//               //     headers: {
//               //         'Content-Type': 'application/json',
//               //     },
//               //     body: JSON.stringify(movieObject),
//               // }
//               // fetch(url, options)
//               //     .then(response => {
//               //         response.json().then(function (data) {
//               //             console.log(data)
//               //         })
//               //     }) /* review was created successfully */
//               //     .catch(error => console.error(error)); /* handle errors */
//
//
//
//
//               /* will return
//               {
//               “userId”: 1,
//               “id”: 5,
//               “title”: “hello task”,
//               “completed”: false
//               }
//               */
//
//               // ************************************************************************
//               // DELETE MOVIE FUNCTION
//               // ************************************************************************
//
//               function deleteMovie(id) {
//                   const removeMovie = fetch(`${url}/${id}`, {
//
//                       method: 'DELETE',
//                       headers: {
//                           'Content-Type': 'application/json',
//                       },
//                   })
//                       .then((response) => response.json()).then(movieFetchRequest)
//                       .catch(error => console.error(error)) /* handle errors */
//               }
//
//               // ************************************************
//               //
//               //   Edit Edit
//               //
//               //
//               // **********************************************
//
//               $('#update-movie-btn').on('click',function (e) {
//                   e.preventDefault();
//                   updateMovie(event,$('#update-id').val());
//               })
//
//               function updateMovie(e,index) {
//
//                   e.preventDefault();
//
//                   const a = {
//
//                       title: $('#movie-title').val(),
//                       genre: $('#movie-genre').val(),
//                       rating: $('#movie-rating').val(),
//                       plot: $('#movie-plot').val(),
//                       director: $('#movie-director').val(),
//                       year: $('#movie-year').val(),
//                       actors: $('#movie-actors').val(),
//                       poster: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy.jpg"
//
//                   }
//
//
//                       const editMovieInfo = fetch(`${url}/${index}`, {
//
//                       method: 'PUT',
//                       headers: {
//                           'Content-Type': 'application/json',
//                       },
//
//                       body: JSON.stringify(a)
//                   }).then((response) => response.json())
//                       .then(movieFetchRequest).then(c=> {
//                           $('#add-movie-btn ').show();
//                           $('#update-movie-btn ').hide()
//                       })
//                       .catch(error => console.error(error)) /* handle errors */
//
//
//               }
//
//               // ************************************************************************
//               // CARDS
//               // ************************************************************************
//
//               function renderMovieCards(movie, parentContainer) {
//
//                   let cardEl = $('<div>');
//                   cardEl.attr("class", "col-8 col-md-8");
//
//                   let cardHTML =
//
//                       `<div class="card mb-3">
//                 <div class="img">
//                     <img class="card-img-top" src=${movie.poster} alt="Card image top">
//                 </div>
//                 <div>
//                     <button class="card-btn" onclick="editForm(${movieList.indexOf(movie)})" id="edit">Edit</button><button class="card-btn" onclick="deleteMovie(${movie.id})">Delete</button>
//                 </div>
//                 <div class="card-body">
//                     <div class="row">
//                         <div class="col-8">
//                             <h2 class="card-title card-text" id="title">${movie.title}</h2>
//                             <p class="card-text" id="plot">${movie.plot}</p>
//                             <p class="card-text" id="genres">${movie.genre}</p>
//                         </div>
//                         <div class="col-4">
//                             <p class="card-text" id="rating"><em>Rating:</em> ${movie.rating}</p>
//                             <p class="card-text" id="director"><em>Director:</em> ${movie.director}</p>
//                             <p class="card-text" id="cast"><em>Cast:</em> ${movie.actors}</p>
//                             <p class="card-text" id="year"><em>Released:</em> ${movie.year}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
//                   cardEl.html(cardHTML);
//                   parentContainer.append(cardEl)
//
//               }
//
//               function editForm(index) {
//                   $("#add-movie-btn").hide();
//                   $("#update-movie-btn").show();
//                   let movie = movieList[index];
//
//                   $('#movie-title').val(movie.title);
//                   $('#movie-genre').val(movie.genre);
//                   $('#movie-rating').val(movie.rating);
//                   $('#movie-plot').val(movie.plot);
//                   $('#movie-director').val(movie.director);
//                   $('#movie-year').val(movie.year);
//                   $('#movie-actors').val(movie.actors);
//
//                   $('#update-id').val(movie.id);
//               };
//
//               $(document).ready(function () {
//                   movieFetchRequest();
//                   $('#add-movie-btn').on('click', addMovie);
//                   $('#update-movie-btn ').hide()
//
//               });
//
//
//
//
//
//
//
// // Give users the option to edit an existing movie
//
// // A form should be pre-populated with the selected movie's details
//
// // Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.
//
// // Delete movies
//
// // Each movie should have a "delete" button
//
// // When this button is clicked, your javascript should send a DELETE request
//
//               // const deleteMovie = (id) => {
//               //     const optionDelete = {
//               //         method:'DELETE'
//               //     }
//               //
//               //     fetch( url + `/${id}`, optionDelete).then(function(response){
//               //         document.getElementById(`${id}`).style.display = 'none'
//               //         // generateMovieDisplay()
//               //         console.log(response.json())
//               //     }).catch( error => {
//               //         alert('Failed to Delete')
//               //         console.error(error)
//               //     });
//               // }

let DEBUG = true;
const url = 'https://cotton-ivy-lantana.glitch.me/movies'
// const apiKeyOmdb = 'http://img.omdbapi.com/?apikey=[9bad961]&'

let movieList = [];



    $.ajax("https://cotton-ivy-lantana.glitch.me/movies").done(function (data) {
    //     // alert("Loading");
    //
    //
    //     let HTML = "";
    //     console.log(data)
    //     data.forEach(function (movies) {
    //         // for (var i =1; i<= movies.length; i++) {
    //         HTML = "<h1>" + movies.title + "</h1>"
    //             + "<h4>" + movies.title + "</h4>"
    //             + "<h3>" + movies.rating + "</h3>";
    //         // }
    //
    //         // HTML = "<h1>" + movies.title + "</h1>"
    //         // // + "<h4>" + movies.title + "</h4>"
    //         // // + "<h3>" + movies.rating + "</h3>";
    //
    //         $("#MainContent").append(HTML);
    //
    //     })
    //
    // })


// ************************************************************************
// FETCH REQUEST TO MOVIE API
// ************************************************************************
$(document).ready(function () {
function movieFetchRequest() {

    const moviesObject = fetch(url);
    let loadingmsg = $('<div>');
    let loadEl = $('#load');
    loadingmsg.html("<b>loading</b>");
    loadEl.append(loadingmsg);

    moviesObject
        .then(response => response.json())
        .then(data => {
            movieList = data;
            renderCards(data);
            if (DEBUG) {
                console.log(data);
            }
        })
        .finally(_ => {
            loadingmsg.remove();
        });
    //PROMISE COMPLETED
}

function renderCards(data) {
    let parent = $('#cards-container');
    parent.empty();
    for (let i = 0; i < data.length; i++) {
        renderMovieCards(data[i], parent);
    }
    return data;
}


// ************************************************************************
// ADD MOVIE FUNCTION
// ************************************************************************

function addMovie(e) {
    e.preventDefault();
    let addMovieTitle = $('#movie-title').val();
    let addMovieGenre = $('#movie-genre').val();
    let addMovieRating = $('#movie-rating').val();
    let addMovieDescription = $('#movie-plot').val();
    let addMovieDirector = $('#movie-director').val();
    let addMovieYear = $('#movie-year').val();
    let addMovieActor = $('#movie-actors').val();
    let addMoviePoster = "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy.jpg";

    const newMovieObj = {
        title: addMovieTitle,
        rating: addMovieRating,
        poster: addMoviePoster,
        year: addMovieYear,
        genre: addMovieGenre,
        director: addMovieDirector,
        plot: addMovieDescription,
        actors: addMovieActor
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovieObj),
    };
    // INSERT NEW MOVIE
    fetch(url, options).then(function (e) {
        movieFetchRequest();
    }).catch(e => {
        alert("Something went wrong")
    })
}


// ************************************************************************
// DELETE MOVIE FUNCTION
// ************************************************************************

function deleteMovie(id) {
    const removeMovie = fetch(`${url}/${id}`, {

        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json()).then(movieFetchRequest)
        .catch(error => console.error(error)) /* handle errors */
}


// ************************************************************************
// EDIT MOVIE FUNCTION
// ************************************************************************


$('#update-movie-btn').on('click',function (e) {
    e.preventDefault();
    updateMovie(event,$('#update-id').val());
})

function updateMovie(e,index) {

    e.preventDefault();

    const a = {

        title: $('#movie-title').val(),
        genre: $('#movie-genre').val(),
        rating: $('#movie-rating').val(),
        plot: $('#movie-plot').val(),
        director: $('#movie-director').val(),
        year: $('#movie-year').val(),
        actors: $('#movie-actors').val(),
        poster: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy.jpg"

    }

    const editMovieInfo = fetch(`${url}/${index}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(a)
    }).then((response) => response.json())
        .then(movieFetchRequest).then(c=> {
            $('#add-movie-btn ').show();
            $('#update-movie-btn ').hide()
        })
        .catch(error => console.error(error)) /* handle errors */


}


// ************************************************************************
// RENDER CARDS
// ************************************************************************

function renderMovieCards(movie, parentContainer) {

    let cardEl = $('<div>');
    cardEl.attr("class", "col-8 col-md-8");

    let cardHTML =

        `<div class="card mb-3">
                <div class="img">
                    <img class="card-img-top" src=${movie.poster} alt="Card image top">
                </div>                
                <div>                        
                    <button class="card-btn" onclick="editForm(${movieList.indexOf(movie)})" id="edit">Edit</button><button class="card-btn" onclick="deleteMovie(${movie.id})">Delete</button>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8">
                            <h2 class="card-title card-text" id="title">${movie.title}</h2>
                            <p class="card-text" id="plot">${movie.plot}</p>
                            <p class="card-text" id="genres">${movie.genre}</p>
                        </div>
                        <div class="col-4">
                            <p class="card-text" id="rating"><em>Rating:</em> ${movie.rating}</p>
                            <p class="card-text" id="director"><em>Director:</em> ${movie.director}</p>
                            <p class="card-text" id="cast"><em>Cast:</em> ${movie.actors}</p>
                            <p class="card-text" id="year"><em>Released:</em> ${movie.year}</p>
                        </div>
                    </div>
                </div>            
            </div>`
    cardEl.html(cardHTML);
    parentContainer.append(cardEl)

}

function editForm(index) {
    $("#add-movie-btn").hide();
    $("#update-movie-btn").show();
    let movie = movieList[index];

    $('#movie-title').val(movie.title);
    $('#movie-genre').val(movie.genre);
    $('#movie-rating').val(movie.rating);
    $('#movie-plot').val(movie.plot);
    $('#movie-director').val(movie.director);
    $('#movie-year').val(movie.year);
    $('#movie-actors').val(movie.actors);

    $('#update-id').val(movie.id);
};


// $(document).ready(function () {
    movieFetchRequest();
    $('#add-movie-btn').on('click', addMovie);
    $('#update-movie-btn ').hide()

})

});