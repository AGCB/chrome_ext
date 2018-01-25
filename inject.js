(function() {
  // document.body.appendChild(document.createElement('script')).src = 'https://code.responsivevoice.org/responsivevoice.js';

    console.log('heelooo')
    console.log(responsiveVoice)
  responsiveVoice.speak("hello world", "UK English Male", {volume: 1});

  
	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);



})();
