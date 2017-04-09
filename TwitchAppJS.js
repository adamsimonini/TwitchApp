
$(document).ready(function(){

var counter = 0;
var gameList = [];
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

      newDiv.innerHTML = '<div id="parentDiv' + counter + '" class="row text-center"><div class="large-1 small-1 columns large-offset-3 small-offset-3"><a id="logolink' + counter + '" href=' + data.url + ' target="_blank"><img id="logo' + counter + '" class="channelLogo" src=""></a></div><a href=' + data.url + ' target="_blank"><div id="name' + counter + '" class="small-4 large-4 columns" style="border-style:solid;"><div class="row"><div id="status' + counter + '" class="large-12 small-12" style="border-style:solid;">STATUS</div></div></div></a><div class="large-1 small-2 columns"><img id="gameCheck height="75%" width="75%"' + counter + '" src=' + gameLogoURL + '></div><div class="large-1 columns end"></div></div>';

      master.appendChild(newDiv);
      document.getElementById("logo" + counter).src = data.logo;
      document.getElementById("name" + counter).innerHTML = data.display_name;
  //  document.getElementById("status" + counter).innerHTML = data.status;
      document.getElementById("logolink" + counter).href = data.url;
      gameList.push(data.game);

  }
  var channelArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "faker", "pago3", "RobotCaleb", "noobs2ninjas", "thijshs", "timthetatman"]

    function initialAPICall(){
      for (var i=0;i<channelArray.length;i++){
        $.ajax({
          dataType: "jsonp",
          url: 'https://wind-bow.gomix.me/twitch-api/channels/' + channelArray[i] + '?callback=?',
          success: function(data){
            console.log(channelArray);
            counter++;
            generateDivs(counter, data)
            }
          });
       }
     }
  initialAPICall(channelArray);


  function refocus(){
    $("#addChannelForm").on("focus", $("#addChannelForm").attr("placeholder", "add new channel by name"));
  }

//Take string, check if it's automatically invalid or not, and pass it to function APICheck
  $("#addChannelBtn").on("click",function(e){
    e.preventDefault();
    var x = document.getElementById("addChannelForm").value;
    var newChannelName = x.replace(/\s+/g, '');
    if(newChannelName != "" && newChannelName != null && newChannelName != undefined){
      document.getElementById("addChannelForm").value = "";
      APICheck(newChannelName);
    }else{
      $("#addChannelForm").attr("placeholder", "invalid channel name");
      $("#addChannelForm").addClass("invalid");
      return;
    }

  });

/*
//Upon clicking the gamelogo, .hide() the divs not associated with that game
  $(".gameLogo").on("click", function(){
    var selectedGame = $(this).children().attr("src");
    alert(selectedGame);
    for(i=0;i<channelArray.length;i++){
      if(selectedGame != $("#name" + i). ){
        return;
      }else{
        return;
      }
    }

  });
*/
});
