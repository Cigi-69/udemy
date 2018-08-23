<?php
	//FUNCTIONS.PHP
	function checkForClickBait() {
		// grab value from textarea in $_POST collection
		// $clickBait = $_POST["clickbait_headline"];
		// make all letters lowercase using strtolower() function
		$clickBait = strtolower($_POST["clickbait_headline"]);

		//store array of clickbait-sounding words of phrases
		$a = array(
			"scientists",
			"doctors",
			"hate",
			"stupid",
			"weird",
			"simple",
			"tricks",
			"shocked me",
			"you'll never belive",
			"hack",
			"epic",
			"unbelievable"
		);

		//store array of replacement words or phrases
		$b = array(
			"so-called scientists",
			"so-called doctors",
			"aren't threatened by",
			"average",
			"completely normal",
			"ineffective",
			"methods",
			"is no different that the others",
			"you won't really be suprised by",
			"slightly improve",
			"boring",
			"normal"
		);

		//use the str_replace() function to replace the words
		$honestHeadline = str_replace($a, $b, $clickBait);

		//return an array of the variables so we can access them globally
		return array($clickBait, $honestHeadline);
	}

	function displayhonestHeadline($x, $y){
		//uppercase the first letter in every word using ucwords() function
		//echo the variable on the screen
		echo '<strong class="text-danger">Original Headline</strong><h4>'.ucwords($x).'</h4><hr>';

		//echo the honest on the screen
		echo '<strong class="text-success">Honest Headline</strong><h4>'.ucwords($y).'</h4>';
	}
?>