// Find project in W4D4H file.
import $ from 'jquery';

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
// 2. When I click on any of those, find the span tag inside of it //done
// 3. With the span tag, get the content of the span tag. .text() //done
// 4. Update the source attribute of my player with that stream url (make sure to add the client id to stream_url) //add

function trackTemplate (track) {
    if (track.artwork_url === null) {
          track.artwork_url = 'http://placehold.it/100x100';
      }
    return `
        <div class="artistsection">
          <span>${track.stream_url}</span>
          <img src=${track.artwork_url}>
          <p>"${track.title}"</p>
        </div>
           `;
}
