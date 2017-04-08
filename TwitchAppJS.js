
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
//Check What Game is Being Played and Store Value in gameLogoURL
      var gameCheck = data.game;
      var gameLogoURL = "";

//Use gameLogoURL.val() to dictate which logo should be displayed
      switch(gameCheck){
        case "StarCraft 2":
        case "Star Craft 2":
        case "Star Craft II":
        case "StarCraft II":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491662365/SC2g_uegjgc.png";
          break;
        case "Counter-Strike: Global Offensive":
        case "CS:GO":
        case "Counter Strike":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515624/counterstrike_a7zlz6.png";
          break;

        case "Coding":
        case "Programming":
        case "Creative":
        case "Javascript":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515625/coding2_ykyefl.png";
          break;
        case "League of Legends":
        case "LoL":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515625/league_audzul.png";
          break;
        case "Hearthstone":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491519890/hearthstone_vyd71n.png";
          break;
        case "Overwatch":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515624/overwatch_n73nxt.png";
          break;
        default:
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491662583/unknown_hokznt.png";
      }

      newDiv.innerHTML = '<div class="row text-center"><div class="large-1 columns small-2 large-offset-3 small-offset-3"><a id="logolink' + counter + '" href="" target="_blank"><img id="logo' + counter + '" class="channelLogo" src=""></a></div><div id="name' + counter + '" class="large-4 small-4 columns" style="border-style:solid;"></div><div class="large-1 small-2 columns small-offset-0"><img id="gameCheck' + counter + '" src=' + gameLogoURL + '></div><div class="large-1 columns small-offset-0"></div></div><div class="row text-center"><div id="status' + counter + '" class="large-4 small-4 large-offset-4 small-offset-5 columns" style="border-style:solid;"></div></div>';
      master.appendChild(newDiv);
      document.getElementById("logo" + counter).src = data.logo;
      document.getElementById("name" + counter).innerHTML = data.display_name;
      document.getElementById("status" + counter).innerHTML = data.status;
      document.getElementById("logolink" + counter).href = data.url;

  }
  var prepopulated = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "faker", "pago3", "RobotCaleb", "noobs2ninjas", "thijshs", "timthetatman"]

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
