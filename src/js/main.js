import $ from 'jquery';
console.log($);
//
// import _ from 'lodash';
// console.log(_.VERSION);
//
// // This token allows you to use api contents
// var token = '41f6b5a26693fd92184ddd76aaeef8ef';
// // this variable gives you the number of content you'd like (I put 5)
// var numOfObjects = '&limit=15';
// // 3. button for search
// $('input').on('submit', function(event) {
//   event.preventDefault();
//
// // this variable is used with the 'q' filter search parameter
// var searchBarInput = $('input').val();
// // this is the base url + the variables to grab the content/api endpoints
// var url = 'https://api.soundcloud.com/tracks?client_id=' + token + numOfObjects + '&q=' + searchBarInput;
//
// // 1. This is used to pull data out from the web API using getSON and .then
// $.getJSON(url).then(function (response) {
//   console.log(response);
//   response.forEach (function (res){
//     var html = getArtists(res);
//     $('.resultscontainer').append(html);
//     var html = getSongs(res)
//     // $('.audiocontainer').append(html);
//     console.log(html);
//   })
// });
//
// });
//
// // 2. function created to pull results for the album artwork, title of song, and username
// function getArtists (artists) {
// $('.resultscontainer').empty();
//   if (artists.artwork_url === null) {
//   `<img src="http://placehold.it/100x100">
//   `;
//   }
//   else {
//   `
//   <div class="artistsection">
//   <img src="${artists.artwork_url}">
//   <p> ${artists.title}</p>
//   <p> ${artists.user.username}</p>
//   </div>
//   `;
// }
// }
//
// // 4. function created to pull audio file from artists clicked
// function getSongs (songs) {
//   return  `<audio controls src=${songs.stream_url}?client_id=${token}></audio>`;
//
// }
//
//
// function songs (stream) {
//
//
//
// }

var audio = $('audio');
var searchForm = $('form');
var results = $('.resultscontainer');

searchForm.on('submit', function (event){
  event.preventDefault();
  results.empty();
  var searchText = $('input').val();
  var token = '41f6b5a26693fd92184ddd76aaeef8ef';
  var numOfObjects = '&limit=15';
  var searchURL = 'https://api.soundcloud.com/tracks?client_id=' + token + numOfObjects + '&q=' + searchText;

  $.getJSON(searchURL).then(function (tracks){
    console.log(tracks);
    tracks.forEach(function (track){
      var data = trackTemplate(track);
      results.append(data);
    });

  $('.resultscontainer').on('click', '.artistsection', function (event) {
    event.preventDefault();
    var findaudiosrc = $(this).find('span').text() + '?client_id=' + token
    audio.attr( 'src', findaudiosrc)
    });
  });
});

// 1. Add an click event listener to each artist section //done
// 2. When I click on any of those, find the span tag inside of it
// 3. With the span tag, get the content of the span tag. .text()
// 4. Update the source attribute of my player with that stream url (make sure to add the client id to stream_url)





function trackTemplate (track) {

    if (track.artwork_url === null) {
          track.artwork_url = 'http://placehold.it/100x100';
      }
    return `
        <div class="artistsection">
          <span>${track.stream_url}</span>
          <img src=${track.artwork_url}>
          <p> ${track.title}</p>
        </div>
        `;
}
