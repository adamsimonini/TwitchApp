
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

var master = document.getElementById("masterDiv");

  function generateDivs(counter, data){

      var newDiv = document.createElement("div");
      newDiv.id = "feed" + counter.toString();
      newDiv.class = "row text-center";
    //  newDiv.innerHTML = "<img style='width: 5%; height: 5%;' src='http://res.cloudinary.com/redkasa/image/upload/v1491615507/580b57fcd9996e24bc43c540_sfri3x.png'>";
      newDiv.innerHTML = '<div class="row text-center"><div class="large-1 columns large-offset-3"><a id="logolink' + counter + '" href="" target="_blank"><img id="logo' + counter + '" class="channelLogo" src=""></a></div><div id="name' + counter + '" class="large-4 columns" style="border-style:solid;"></div><div class="large-1 columns small-offset-0"><img src="http://res.cloudinary.com/redkasa/image/upload/v1491615507/580b57fcd9996e24bc43c540_sfri3x.png"></div><div class="large-1 columns small-offset-0"></div></div><div class="row text-center"><div id="status' + counter + '" class="large-4 large-offset-4 columns" style="border-style:solid;"></div></div>';
      document.getElementById("logo" + counter).src = data.logo;
      document.getElementById("name" + counter).innerHTML = data.display_name;
      document.getElementById("status" + counter).innerHTML = data.status;
      document.getElementById("logolink" + counter).href = data.url;
      master.appendChild(newDiv);

  }
  var prepopulated = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "faker", "pago3", "RobotCaleb", "noobs2ninjas"]

    function initialAPICall(){
      var counter = 0;
      for (var i=0;i<prepopulated.length;i++){
        $.ajax({
          dataType: "jsonp",
          url: 'https://wind-bow.gomix.me/twitch-api/channels/' + prepopulated[i] + '?callback=?',
          success: function(data){
            console.log(data);
            counter++;
            generateDivs(counter, data)
            }
          });
       }
     }
  initialAPICall(prepopulated);
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
