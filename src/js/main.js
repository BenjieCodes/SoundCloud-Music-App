import $ from 'jquery';
console.log($);

import _ from 'lodash';
console.log(_.VERSION);

// This token allows you to use api contents
var token = '41f6b5a26693fd92184ddd76aaeef8ef'
// this variable gives you the number of content you'd like (I put 5)
var numOfObjects = '&limit=5'
// this is the base url + the variables to grab the content/api endpoints
var url = 'https://api.soundcloud.com/tracks?client_id=' + token + numOfObjects;

$.getJSON(url).then (function (songs) {

    console.log(songs);
})
