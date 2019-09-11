var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 8; // 8AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 3PM


var updateClock = function() 
{
//getting correct message based on time of day
var messageJS = document.getElementById("timeEvent");
//getting correct image based on time of day
var lolcatImage = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

//images and message by time frame
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "PARTEE!! Break out the cat nip!! Buckle-up boys! It's gonna be a bumpy ride!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Ooooh, me so tired! Me gonna take a nap now. Please no disturb sleepies.";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Okay, this is getting ridiculous! You know it's my lunch time, right?? FOOD!";
} else if (time == wakeUpTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	messageText = "Hello, sunshine. HELLOOOO!!! What do you mean it's too early?? You haven't fed me in like, a thousand years! I'm wasting away to skin and bones! FEED ME!!";
} else if (time < noon) {
	image = "https://assets.change.org/photos/4/cj/io/csCJioStzPJrNxS-400×400-noPad.jpg?1526653208";
    messageText = "Morning! My food dish is empty. You are gonna do something about that, right?";
} else if (time > evening) {
	image = "https://i0.wp.com/beckybendylegs.com/wp-content/uploads/2013/01/lolcats-lol-cats-10678507-450-427.jpg?w=450&ssl=1";
    messageText = "Evening! My food dish is empty, again. Just sayin'.";
} else {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon! Time for biscuits and bird watching.";
}
messageJS.innerText = messageText;
lolcatImage.src = image;
showCurrentTime();
};

//showing the current time
var showCurrentTime = function()
{ 
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

//Party Time Button functions
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
   if (isPartyTime === false) {
   	  isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "PARTY TIME!"; 
      partyTimeButton.style.backgroundColor = "#222";}
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER.";
      partyTimeButton.style.backgroundColor = "#0A8DAB"; }
};
partyTimeButton.addEventListener("click", partyEvent);

//Time Selectors
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");


var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value; };
var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value; };
var napEvent = function() {
	napTime = napTimeSelector.value; };

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);