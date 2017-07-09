var keys = require("./keys.js");
var Twitter = require('twitter');
var keyList = keys.twitterKeys


  /*var client = new Twitter({
  	 consumer_key: 'R6UQEy2rro0prEv5lodek45i4',
	   consumer_secret: 'h7x4EOWmSw9fGupIGUuYOXDbSmZuX3rUPcOjzne7dqjcGt2sXY',
	   access_token_key: '880216958569816064-wFDqcNkibRnIrhdLFKORxBQdItuOBw7',
	   access_token_secret: 'YOCaNwthWI8XgatsT4q7MeaSJqCs4UghqrUYwokvMac85'
	});*/
 
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


	

