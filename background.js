let flag = true;
chrome.browserAction.onClicked.addListener(function (tab) {
  if(flag){chrome.browserAction.setIcon({path:"green.png"}); flag = false}
  else{chrome.browserAction.setIcon({path:"red.png"}); flag = true}
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {});});

                            
