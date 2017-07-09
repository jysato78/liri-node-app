var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var request = require("request");

if(process.argv[2] === "my-tweets") {
  	  var client = new Twitter(keys.twitterKeys);
 
	  var params = {screen_name: '@nagayamaokimus'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if(error) {
        console.log(error);
      }

      	else if (!error) {
        	for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        
      	}
     });
	}


if(process.argv[2] === "do-what-it-says") {
	fs.readFile("random.txt","utf8", function(error, data) {
	if(error) {
		return console.log(error);
	}
	console.log(data);
	});
}
	

	
if(process.argv[2] === "spotify-this-song") {
	
		var spotify = new Spotify({
  			id: '3b8f51ff0d8343b29ed858b62ee17f98',
  			secret: '7b11e1bac24643e7aebaf893dae925ef'
		});

 		var song = process.argv[3];

		spotify.search({ type: 'track', query: song }, function(err, data) {
  			if (err) {
    			return console.log('Error occurred: ' + err);
  			}
 			if (!err) {
                for (var i = 0; i < data.tracks.items.length; i++) {
                    var songData = data.tracks.items[i];
                    console.log("Artist: " + songData.artists[0].name);

                    console.log("Song: " + songData.name);

                    console.log("Preview URL: " + songData.preview_url);

                    console.log("Album: " + songData.album.name);
       	   		}	
        	}
        
      	});
			
	

	}

var movie = process.argv[3];

 if (process.argv[2] === "movie-this") {

	request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  
  if (error) {
  	console.log("error ",error);
  }
  // If the request was successful...
  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).Ratings[0]);
    console.log(JSON.parse(body).Ratings[1]);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
  }
});

}

