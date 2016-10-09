$(document).ready(function() {

	/*Twitter puto*/
	$('#twitter-widget-0').removeAttr( 'style' );
	$('#twitter-widget-0').find('div > footer').remove();

	// $('#FB_iframe').removeAttr('style');
	// $('#FB_iframe html').removeAttr('style');
	// $('#FB_iframe body').removeAttr('style');
	// $('#FB_iframe div').removeAttr('style');

	//FB de mierda
	   	$.ajaxSetup({ cache: true });
		  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
		    FB.init({
		      appId: '350794601927831',
		      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
		    });     
		    //$('#loginbutton,#feedbutton').removeAttr('disabled');
		    //FB.getLoginStatus(updateStatusCallback);
		  });
});
