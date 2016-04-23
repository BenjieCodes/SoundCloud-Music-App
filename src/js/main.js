import $ from 'jquery';
console.log($);

import _ from 'lodash';
console.log(_.VERSION);

// This token allows you to use api contents
var token = '41f6b5a26693fd92184ddd76aaeef8ef'
// this variable gives you the number of content you'd like (I put 5)
var numOfObjects = '&limit=20'
// this is the base url + the variables to grab the content/api endpoints
var searchBarInput = '';

var url = 'https://api.soundcloud.com/tracks?client_id=' + token + numOfObjects + '&q=John Mayer'



// This is used to pull data out from the web API using getSON and .then
$.getJSON(url).then(function (response) {
  console.log(response);
    response.forEach (function (res){
      var html = getArtists(res);
      $('.artists').append(html);
    })

    // response.filter (function (res){
    //   var html = getSongs(res);
    //   $('.audiocontainer').append(html);
    // })
});


// function created to pull results for the album artwork, title of song, and username
function getArtists (artists) {

  return `
  <img src="${artists.artwork_url}">
  <p> ${artists.title}</p>
  <p> ${artists.user.username}</p>
  <audio controls src="${artists.stream_url}?client_id=${token}"></audio>
  `;
}
