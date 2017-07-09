var Spotify = require('node-spotify-api');

//if(process.argv[2] = "spotify-this-song") {
	var spotify = new Spotify({
  	id: '3b8f51ff0d8343b29ed858b62ee17f98',
  	secret: '7b11e1bac24643e7aebaf893dae925ef'
	});

 	var song = process.argv[3];

	spotify.search({ type: 'track', query: 'radioactive' }, function(err, data) {
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
//}