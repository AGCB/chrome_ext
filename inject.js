(function() {
  // document.body.appendChild(document.createElement('script')).src = 'https://code.responsivevoice.org/responsivevoice.js';
  // setTimeout(()=>{
  //   console.log('heelooo')
  //   console.log(responsiveVoice)
  //   debugger
  //   responsiveVoice.speak("hello world");
  // },4000)

   var utterance = new SpeechSynthesisUtterance('Hello Treehouse');
window.speechSynthesis.speak(utterance);
	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);



})();
