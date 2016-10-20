$(document).ready(function() {

	/*Twitter puto*/
	twttr.widgets.createFollowButton(
	  'SanLeonWeb',
	  document.getElementById('ttt'), /*Nombre del contenedor*/
	  {
	     showScreenName: "false", /*Opciones ?*/
   		 showCount: false,
   		 size: "large"
	  }
	);


$.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '350794601927831',
      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    });     
   
  });

});