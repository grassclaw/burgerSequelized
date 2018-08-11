
// I saw this idea from a stackoverflow and pretty much just copy and pasted this file
// All sounds are from http://soundbible.com


$(document).ready(function() {

  // Pre-load sound effects

  var animalSounds = {
    1:new Audio('http://soundbible.com/mp3/TomCat-Mr_Smith-2055290520.mp3'),
    2:new Audio('http://soundbible.com/mp3/Sheep Bleating-SoundBible.com-1373580685.mp3'),
    3:new Audio('http://soundbible.com/mp3/Turkey Gobble-SoundBible.com-312252853.mp3'),
    4:new Audio('http://soundbible.com/mp3/Lion-SoundBible.com-621763115.mp3')
  };


  // Click Listener for growl Button
  $('.growl-button').on("click", function(){

    // Generate a random number (from 0 to length of array)
    var i = Math.floor(Math.random()*3);

    // Play the random sound
    animalSounds[i].play();

  });


});