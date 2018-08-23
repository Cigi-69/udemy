<?php
	define("TITLE", "Honest Click Bait Headlines");
	include('functions.php');
	if( isset($_POST["fix_submit"]) ) {
		checkForClickBait();
	}

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatibile" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php echo TITLE; ?></title>
	<link rel="stylesheet" href="">

	<!-- Bootstrap 3 - Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!-- [if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]=-->


</head>
<body>
	<div class="container">
		<h1><?php echo TITLE; ?></h1>
		<p class="lead">Hate click bait? Turn those annoying headlines into realistic and honest ones using this simple program.</p>

		<div class="row">
			<form class="col-sm-8 col-sm-offset-2" action="" method="post">
				<textarea placeholder="Paste click bait headline here" class="form-control input-lg" name="clickbait_headline"></textarea><br>
				<button type="submit" class="btn btn-primary btn-lg pull-right" name="fix_submit">Make honest!</button>
			</form>
		</div>

		<?php
			if (isset($_POST["fix_submit"])) {

				//get first value in array returned by chcecForClickBait() function
				$clickBait = checkForClickBait()[0];
				//get second value in array returned by chcecForClickBait() function
				$honestHeadline = checkForClickBait()[1];
				//call function and pass two arguments in the function
				displayhonestHeadline($clickBait, $honestHeadline);
			}
		?>

	</div>


	<!-- Bootstrap 3 JS - Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>