
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

  function generateDivs(i, data){

      var newDiv = document.createElement("div");
      newDiv.id = "feed" + i.toString();
      newDiv.class = "row text-center";
      newDiv.innerText = data.display_name;
    //  newDiv.innerHTML = "<img style='width: 5%; height: 5%;' src='http://res.cloudinary.com/redkasa/image/upload/v1491615507/580b57fcd9996e24bc43c540_sfri3x.png'>";
      master.appendChild(newDiv);
  }
  var prepopulated = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

    function initialAPICall(){
      for(var i=0;i<prepopulated.length;i++){
        $.ajax({
          dataType: "jsonp",
          url: 'https://wind-bow.gomix.me/twitch-api/channels/' + prepopulated[i] + '?callback=?',
          success: function(data){
            console.log(data);
            document.getElementById("logo1").src = data.logo;
            document.getElementById("name1").innerHTML = data.display_name;
            document.getElementById("status1").innerHTML = data.status;
            document.getElementById("logolink1").href = data.url;
            generateDivs(i, data);
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
