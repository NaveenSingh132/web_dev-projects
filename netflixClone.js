/* Boot up the app  */

// API Key= 2f7ebe7b211f519a69c09b93aa2d3bff
// API Read Access Token= eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjdlYmU3YjIxMWY1MTlhNjljMDliOTNhYTJkM2JmZiIsInN1YiI6IjY1NDdhZDZkZmQ0ZjgwMDEzY2U5NGQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iy8qJluD_LBDHipI5N1PLGhlXICitZ4XnXqDM3TG2Wo
// curl --request POST \
//      --url https://api.themoviedb.org/4/auth/request_token \
//      --header 'accept: application/json' \
//      --header 'content-type: application/json'

// ----------------------------------------------------------------------------------------------

const apiKey='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjdlYmU3YjIxMWY1MTlhNjljMDliOTNhYTJkM2JmZiIsInN1YiI6IjY1NDdhZDZkZmQ0ZjgwMDEzY2U5NGQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iy8qJluD_LBDHipI5N1PLGhlXICitZ4XnXqDM3TG2Wo'





function init(){

}

window.addEventListener('load',function(){

    init();

})

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));