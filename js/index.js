$('#content').delay(20).fadeIn(1000);

$('footer').delay(20).fadeIn(1000);

(function($) {
  $(function() {
    $('.toggleOverlay').click(function() {
      $('aside').toggleClass('open');
    });
  });
})(jQuery);

function toggleInfo() {
	// get the contact info
	var contact = document.getElementById('contactInfo');

	// get the intro info
	var intro = document.getElementById('introInfo');

	//get the contact link
	var contactLink = document.getElementById('contact')

	// get the current value of the contactInfo display property
	var contactDisplaySetting = contact.style.display;

	// get the current value of the introInfo display property
	var introDisplaySetting = intro.style.display;

	//now toggle the shown info depending on the current state
	if(contactDisplaySetting == 'block') {
		//contact info is visible, hide it
		contact.style.display = 'none';
		//intro info is hidden, show it
		intro.style.display = 'block';
		//change contact link text
		contactLink.innerHTML = 'contact';
	}
	else {
		//contact info is hidden, show it
		contact.style.display = 'block';
		//intro info is visible, hide it
		intro.style.display = 'none';
		//change contact link text
		contactLink.innerHTML = 'info';
	}
}