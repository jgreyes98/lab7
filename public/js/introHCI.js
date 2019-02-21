'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  // your code here	
	$(".likeBtn").click(likeClick);
}

function likeClick(e) { 
    e.preventDefault();
    gtag("create", 'UA-134738603-1', "auto");
	gtag("event", "click", {"event-category": "like"});

}