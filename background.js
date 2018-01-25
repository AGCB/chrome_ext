chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
	  file: 'copy.js'
          //file: 'inject.js'
	});
});

chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
	  file: 'inject.js'
          //file: 'inject.js'
	});
});



// chrome.browserAction.onClicked.addListener(function(tab){
//   // chrome.tabs.executeScript(tab.id,{
//   //   file: 'myscript.js'
//   // })
//   chrome.tabs.executeScript(tab.id, {
//     code:"console.log('bgrnd');document.body.appendChild(document.createElement('script')).src = 'https://example.com/script.js';"
// });

// })
                                     
