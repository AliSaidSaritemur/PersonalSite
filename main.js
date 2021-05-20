//getting the DOM elements
var elapsedTime = document.querySelector("#elapsed");
var homeTeamImage = document.querySelector("#homeLogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamImage = document.querySelector("#awayLogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoal = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");


//the functions to create an element
function addMatchTile(data){
    //createing the tile div
    var matchtile = document.createElement('div');
    matchtile.classList.add("match-tile");

    //creating the home match box
    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");
    //creating the image and the text
    var homeTileTeamName = document.createElement('p');
 //   console.log(data[teams]);
    homeTileTeamName.innerHTML = data['teams']['home']['name'];
    var homeTileTeamLogo = document.createElement('img');
    homeTileTeamLogo.src=data['teams']['home']['logo'];
    homeTeam.appendChild(homeTileTeamLogo);
    homeTeam.appendChild(homeTileTeamName);

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");
    //creating the image and the text
    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML = data['teams']['away']['name'];
    var awayTileTeamLogo = document.createElement('img');
    awayTileTeamLogo.src=data['teams']['away']['logo'];
    awayTeam.appendChild(awayTileTeamLogo);
    awayTeam.appendChild(awayTileTeamName);

    //createing the score
    var score = document.createElement('p');
    score.innerHTML = data['goals']['home'] + " - " + data['goals']['away'];

    //append all the element to the parent
    matchtile.appendChild(homeTeam);
    matchtile.appendChild(score);
    matchtile.appendChild(awayTeam);

    matchTable.appendChild(matchtile);
}
//fetching the data
fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2020&team=611&league=203", {
    
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4536a5bf5fmshb253c8d32d8e55ap150f30jsn06a4a9823cfa",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => response.json().then(data => {
   /// for(var i=0; i< data['response'].length ; i++){
    for(var i=data['response'].length-1; i>32; i--){
    console.log(data);
    console.log("calisti");
    var matchesList = data['response'];
    console.log("calisti2");
    //console.log(data[response][0]);
    var fixture = matchesList[i]['fixture'];
    console.log("geldiiii");
    var goals = matchesList[i]['goals'];
    var teams = matchesList[i]['teams'];
    console.log(matchesList.length);
   //Now let's set our first match
   elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
   homeTeamImage.src = teams['home']['logo'];
   homeTeamName.innerHTML = teams['home']['name'];
   awayTeamImage.src = teams['away']['logo'];
   awayTeamName.innerHTML = teams['away']['name'];
   lastMatchGoal.innerHTML = goals['home']+ " - " + goals['away'];

       addMatchTile(matchesList[i]);
  
    }
}))
.catch(err => {
    print("hata geldi");
//    console.log(err);
});