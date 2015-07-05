var express = require('express');
var app = express();
var http = require('http');
var twitter = require('twitter-app-api');
var keys = require('./keys.js').keys;

var twit = new twitter(keys.twitterConsumerKey, keys.twitterConsumerSecret);

var resultingTweets = [];
var fwpTweet = '';


app.get('/', function(req, res) {
  twit.authenticate().then(function() {
    twit.search({
      q: 'firstworldproblems',
      lang: 'en'
    }).then(function(tweets) {
      tweets.statuses.forEach(function(twit) {
        resultingTweets.push(twit.text);
      });
      fwpTweet = resultingTweets[Math.floor(Math.random() * resultingTweets.length)];
      res.send(fwpTweet);
    });
  });
});

app.listen(3000);
