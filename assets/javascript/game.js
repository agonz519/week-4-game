var randomTarget;
var score = 0;
var wins = 0;
var losses = 0;
var targetNumberDisplay = $('#number-to-guess');
var playerScoreDisplay = $('#playerScore');
var winsDisplay = $('#wins');
var lossesDisplay = $('#losses');
var imageCrystal;
var crystals = $('#crystals');
// What the crystals will be worth
var numberOptions = [getRandomIntInclusive(1, 12), getRandomIntInclusive(1, 12), getRandomIntInclusive(1, 12), getRandomIntInclusive(1, 12)];

// FUNCTIONS=======================================================

function newGame() {
	score = 0;
	playerScoreDisplay.text(score);
	randomTarget = getRandomIntInclusive(19, 120);
	targetNumberDisplay.text(randomTarget);
	winsDisplay.text(wins);
	lossesDisplay.text(losses);

	numberOptions = [getRandomIntInclusive(1, 12), getRandomIntInclusive(1, 12), getRandomIntInclusive(1, 12), getRandomIntInclusive(1, 12)];

	for (var i = 0; i < numberOptions.length; i++) {
		$('.crystal-image' + i).attr('data-crystalValue', numberOptions[i]);
	}
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	//The maximum is inclusive and the minimum is inclusive
}

// Body =========================================================

newGame();

// For loop creates crystals with different values assigned
for (var i = 0; i < numberOptions.length; i++) {
	imageCrystal = $('<img>');
	imageCrystal.addClass('crystal-image' + i);
	imageCrystal.attr('src', 'assets/images/crystal' + i + '.png');
	imageCrystal.attr('data-crystalValue', numberOptions[i]);
	crystals.append(imageCrystal);
}

// On click event to to add value to total, pulling data-crystalValue attribute
crystals.on('click', 'img', function() {
	var crystalValue = ($(this).attr('data-crystalValue'));
	crystalValue = parseInt(crystalValue);
	score += crystalValue;
	playerScoreDisplay.text(score);

	if (score === randomTarget) {
		alert('You won!');
		wins++;
		winsDisplay.text(wins);
		newGame();
	}

	else if (score >= randomTarget) {
		alert('Game over!');
		losses++;
		lossesDisplay.text(losses);
		newGame();
	}
});


