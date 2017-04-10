
$(document).ready(function(){

var counter = 0;
var gameList = [];
var master = document.getElementById("masterDiv");
var channelArray = ["bratishkinoff", "bibaboy", "ESL_SC2", "ESL_CSGO", "OgamingSC2", "cretetion", "freecodecamp", "faker", "veggie16", "MadaPLS", "pago3", "RobotCaleb", "noobs2ninjas", "thijshs", "timthetatman", "Valkia", "Kephrii", "Gale_Adelade", "ZelosSC"]
var arrayLengthCounter = channelArray.length;

  function generateDivs(counter, data){

      var newDiv = document.createElement("div");
      newDiv.id = "feed" + counter;
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
          newDiv.className += "SC2";
          break;
        case "Counter-Strike: Global Offensive":
        case "CS:GO":
        case "Counter-Strike":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515624/counterstrike_a7zlz6.png";
          newDiv.className += "CS";
          break;
        case "Coding":
        case "Programming":
        case "Creative":
        case "Javascript":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515625/coding2_ykyefl.png";
          newDiv.className += "Coding";
          break;
        case "League of Legends":
        case "LoL":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515625/league_audzul.png";
          newDiv.className += "LoL";
          break;
        case "Hearthstone":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491519890/hearthstone_vyd71n.png";
          newDiv.className += "Hearthstone";
          break;
        case "Overwatch":
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491515624/overwatch_n73nxt.png";
          newDiv.className += "Overwatch";
          break;
        default:
          gameLogoURL = "http://res.cloudinary.com/redkasa/image/upload/v1491662583/unknown_hokznt.png";
          newDiv.className += "Unknown";
      }

      newDiv.innerHTML = '<div id="parentDiv' + counter + '" class="row text-center"><div class="large-1 small-1 columns large-offset-3 small-offset-3 channelLogoDiv"><a id="logolink' + counter + '" href=' + data.url + ' target="_blank"><img id="logo' + counter + '" class="channelLogo" src=""></a></div><a href=' + data.url + ' target="_blank"><div id="name' + counter + '" class="small-4 large-4 columns" style="border-style:solid;"><div class="row"><div id="status' + counter + '" class="large-12 small-12" style="border-style:solid;">STATUS</div></div></div></a><div class="large-1 small-2 columns"><img id="gameCheck height="75%" width="75%"' + counter + '" src=' + gameLogoURL + '></div><div class="large-1 columns end"></div></div>';

      master.prepend(newDiv);
      document.getElementById("logo" + counter).src = data.logo;
      document.getElementById("name" + counter).innerHTML = data.display_name;
  //  document.getElementById("status" + counter).innerHTML = data.status;
      document.getElementById("logolink" + counter).href = data.url;
      gameList.push(data.game);

  }

    function initialAPICall(arrayLengthCounter){
      for (var i=0;i<channelArray.length;i++){
        $.ajax({
          dataType: "jsonp",
          url: 'https://wind-bow.gomix.me/twitch-api/channels/' + channelArray[i] + '?callback=?',
          success: function(data){
            counter++;
            arrayLengthCounter++;
            generateDivs(counter, data)
            }
          });
       }
     }
  initialAPICall(channelArray);

// Removes invalid CSS class from form field
  function revalidate(){
    $(document).on("click", function(){
    $("#addChannelForm").on("focus", $("#addChannelForm").removeClass("invalid"));
    $("#addChannelForm").on("focus", $("#addChannelForm").attr("placeholder", "add new channel"));
   });
  }

  function APICheck(newChannelName){
    $.ajax({
      dataType: "jsonp",
      url: 'https://wind-bow.gomix.me/twitch-api/channels/' + newChannelName + '?callback=?',
      success: function(data){
        arrayLengthCounter++
//Check if data.error exists, and if it doesn't then the JSON request worked
        if(data.error == null){
//Empty out channelArray and populate it with newChannelName
          channelArray.splice(0, channelArray.length, newChannelName);
          initialAPICall(channelArray);
        }else{
          $("#addChannelForm").attr("placeholder", "invalid channel name");
          $("#addChannelForm").addClass("invalid");
          alert("Error: no such channel exists");
          revalidate();
          return;
        }
      }
    });
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
      revalidate();
      return;
    }
  });

//Listen for logo filter and hide elemts without corresponding class
  $(".gameLogo").on("click", function(){
    var gameClicked = this.id;
    for(var i=0;i<=arrayLengthCounter;i++){
      if(gameClicked == "Refresh"){
        $("#feed" + [i]).show(3000);
      }else{
        if($("#feed" + [i]).hasClass(gameClicked)){
          $("#feed" + [i]).show(3000);
        }else{
          $("#feed" + [i]).hide(3000);
        }
      }
    }
  });

// Seach Channels button
  function searchChannels(){
    var searchInput =  document.getElementById("searchInput").value.toLowerCase();
    var exists = 0;
//Check if there is anything that matches the input

        for(var ii=1;ii<=arrayLengthCounter;ii++){
        if(searchInput != document.getElementById("name" + [ii]).innerHTML.toLowerCase()){
          $("#feed" + [ii]).hide(3000);
        }else{
          $("#feed" + [ii]).show(3000);
        }
      }
  }
  $("#searchChannelBtn").on("click", function(){
    searchChannels();
    document.getElementById("searchInput").value = "";
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
