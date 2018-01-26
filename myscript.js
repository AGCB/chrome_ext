let t = '', flag = false

function gText(e) {
  t = (document.all) ? document.selection.createRange().text : document.getSelection();
  if(flag) window.speechSynthesis.speak(new SpeechSynthesisUtterance(t));}

document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);

chrome.runtime.onMessage.addListener(()=> {flag = (flag ? false : true)});

