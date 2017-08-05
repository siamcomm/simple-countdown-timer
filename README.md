# Simple Countdown Timer
A JavaScript countdown down that can be easily configured and inserted into an HTML page.

The code uses a single JavaScript file to manage the values for the countdown clock, such as days, hours, minutes and seconds.
It the inserts the value into the indicated ID tag in the HTML file.

The project comes with its own CSS file, but you are welcome to create your own.

## Installation
1. Download the code from this repository
2. Copy the script.js file to the root folder or another folder where your 'js' files are located
3. Add this line to the HTML file just before the closing 'body' tag:
	<script type='text/javascript' src='path/to/your/js/script.js'></script>
4. Copy the CSS file to your CSS folder or just copy the CSS content to your main CSS file.
5. Make sure your HTML file has an element with an `id="countdown"`.

If you are using the default individual elements, also make sure your HTML file contacts the following 'divs' inside the element with the ID of 'countdown' like so.:

	<div id="countdown">
		<div class="cd-item" id="countdowndays"></div>
		<div class="cd-item"><div class="cd-divider">:</div></div>
		<div class="cd-item" id="countdownhours"></div>
		<div class="cd-item"><div class="cd-divider">:</div></div>
		<div class="cd-item" id="countdownmins"></div>
		<div class="cd-item"><div class="cd-divider">:</div></div>
		<div class="cd-item" id="countdownsecs"></div>
	</div>

**Congratulations!** You are ready to configure and see it in action.

## Configuration
For this you will need to edit the JS file.
1. On line 4, set the date you want to countdown to ...

... that is all!

If you want to change the output, you can by reading the **Customisation Options** below.

## Customisation Options
There are two options for inserting the countdown values into a web page:

1. As a single line of code
2. As individual values in individual ID tags 

### As a Single Line of Code
The values can be combined into a single statement for insertion into an ID tag as shown in the following example:

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "  + minutes + "m " + seconds + "s ";

This will insert the string into the HTML element with an ID tag of "countdown".
You can see this in the code and it is commented out.
If you wish to use this, remove the "// " characters from the beginning of the line and comment out the other lines of code for inserting the individual items.

### As Individual Values
This is the default setting in the code and, using the default HTML template, it will output the countdown timer as follows:

	<div id="countdown">
		<div class="cd-item" id="countdowndays">*{ Value for days will be inserted here }*</div>
		<div class="cd-item"><div class="cd-divider">:</div></div>
		<div class="cd-item" id="countdownhours">*{ Value for hours will be inserted here }*</div>
		<div class="cd-item"><div class="cd-divider">:</div></div>
		<div class="cd-item" id="countdownmins">*{ Value for minutes will be inserted here }*</div>
		<div class="cd-item"><div class="cd-divider">:</div></div>
		<div class="cd-item" id="countdownsecs">*{ Value for seconds will be inserted here }*</div>
	</div>

The lines of code in the JavaScript file that manage this are:

	document.getElementById("countdowndays").innerHTML = '<div class="cd-num">' + days + '</div> DAYS';
    document.getElementById("countdownhours").innerHTML = '<div class="cd-num">' + hours + '</div> HRS';
    document.getElementById("countdownmins").innerHTML = '<div class="cd-num">' + minutes + '</div> MINS';
    document.getElementById("countdownsecs").innerHTML = '<div class="cd-num">' + seconds + '</div> SECS';

These lines can be commented out by adding a "// " in front of each line if you decide to use the single line of code option
