
/* Roof for all Twitch.tv API requests
https://api.twitch.tv/kraken/"channel"

...callback=foo


Twitch ClientID = "vrildt3l2ipx57q51hytkgthgzvyku";

Secret = "b6osn0z5n5xq208ey6xoz51kynkus0";

application/vnd.twitchtv[v3]+json

  $.getJSON

  https://api.twitch.tv/kraken/channels/nl_kripp

https://api.twitch.tv/kraken/streams?game=StarCraft+II%3A+Heart+of+the+Swarm&channel=test_channel,test_channel2

*/
$(document).ready(function(){
  var channelName = "freecodecamp";

    function APICall(){
      $.ajax({
        dataType: "jsonp",
        url: 'https://wind-bow.gomix.me/twitch-api/channels/' + channelName + '?callback=?',
        success: function(data){
          console.log(data);
          $("#logo").innerHTML = "<img src='https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png'>"
          $("#test").append(data.game);
          $("#test").append(data.status);
          $("#test").append(data._id);
          console.log(data.display_name);
          console.log(data.status);
          console.log(data._id);
        }
     });
   }
  APICall();
});



/*

$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?', function(data){
  var json = data;
  var name = json[]
});
}



  function APICall(){
          $.ajax({
            type:"GET",
            url: "https://api.twitch.tv/kraken/streams/nl_kripp"
            dataType: "jsonp",
            success: function(data){
              console.log(data);
            }
            APICall();
});
*/
