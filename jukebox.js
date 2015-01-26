// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
var promptAndPlay = function() {
  var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
  var song = parseSong(songString);
// WXU
//  playSong(song, 500, promptAndPlay);
	$('#play_button').attr('disabled', true);
	$('#play_button').html("Playing...");
	playSong(song, 500, changeDisplay );
};

// Get things going.
// WXU:   
// promptAndPlay();

$(document).ready(function() {
	$('#play_button').on('click', promptAndPlay);

});

var changeDisplay = function() {
	$('#play_button').attr('disabled', false);
	$('#play_button').html("To Play");
};