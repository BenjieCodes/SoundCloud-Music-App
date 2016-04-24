import $ from 'jquery';
console.log($);

import _ from 'lodash';
console.log(_.VERSION);

// This token allows you to use api contents
var token = '41f6b5a26693fd92184ddd76aaeef8ef';
// this variable gives you the number of content you'd like (I put 5)
var numOfObjects = '&limit=20';
// 3. button for search
$('button').on ('click', function(event) {
  console.log('search button was clicked!');
// this variable is used with the 'q' filter search parameter
var searchBarInput = $('input').val();
// this is the base url + the variables to grab the content/api endpoints
var url = 'https://api.soundcloud.com/tracks?client_id=' + token + numOfObjects + '&q=' + searchBarInput;

console.log(url);

// 1. This is used to pull data out from the web API using getSON and .then
$.getJSON(url).then(function (response) {
  console.log(response);
  response.forEach (function (res){
    var html = getArtists(res);
    $('.artists').append(html);

  })
});

$('.artists').on('click', function (event) {
  var html = getSongs(res)
  $('.audiocontainer').append(html);
  console.log(html);

  })

  event.preventDefault();
});

// 2. function created to pull results for the album artwork, title of song, and username
function getArtists (artists) {

  return `
  <img src="${artists.artwork_url}">
  <p> ${artists.title}</p>
  <p> ${artists.user.username}</p>
  `;
}

// 4. function created to pull audio file from artists clicked
function getSongs (songs) {
  return `
  <audio controls src=${songs.stream_url}?client_id=${token}></audio>
  `;
}
