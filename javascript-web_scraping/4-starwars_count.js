#!/usr/bin/node
const episodeNum = process.argv[2];
const request = require('request');
request('https://swapi-api.hbtn.io/api/films/', function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const filmJson = JSON.parse(body);
  //console.log(filmJson.results[0].characters);
  const person = 'https://swapi-api.hbtn.io/api/people/18/';
  const loc = person.indexOf('18');
  console.log(loc);
});
