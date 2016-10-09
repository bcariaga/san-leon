$(document).ready(function() {

	/*Twitter puto*/
	$('#twitter-widget-0').removeAttr( 'style' );
	$('#twitter-widget-0').find('div > footer').remove();
	
		// window.fbAsyncInit = function() {
	 //    FB.init({
	 //      appId      : '350794601927831',
	 //      xfbml      : true,
	 //      version    : 'v2.8'
	 //    });
	 //  };

	 //  (function(d, s, id){
	 //     var js, fjs = d.getElementsByTagName(s)[0];
	 //     if (d.getElementById(id)) {return;}
	 //     js = d.createElement(s); js.id = id;
	 //     js.src = "https://connect.facebook.net/en_US/sdk.js";
	 //     fjs.parentNode.insertBefore(js, fjs);
	 //   }
	 var divPadre = $('#tarjetasFB');
	// jQuery.ajax({
	//   url: 'https://graph.facebook.com/SanLeonWeb/'+
	//   		'posts?'+	//pido los post
	//   		'fields=' 	+	'full_picture,picture,link,message,created_time'+ // los campos
	//   		'&limit='	+	'5' +// cuantos post queres capo?
	//   		'&access_token='+'EAACEdEose0cBAENIC9prQSAco0vnn0WYpOISOilyaKdcmihOq5TELLjSZAn1IvWlPurZC3WmZBE1kF4J44TAxrOIH4ww8y5T5C9KQUv351v6eQ2Dj8eqHt3RCxktUZBZBFXPJRnfCiYZC5DMn4iYs4wvZCaeY6iC5eZCC255LmoJiQZDZD',//no estoy seguro si va aca
	//   type: 'GET',
	//   dataType: 'json',
	//   //data: {param1: 'value1'},
	//   complete: function(xhr, textStatus) {
	//     //called when complete

	//   },
	//   success: function(data, textStatus, xhr) {
	//     //called when successful
	//    CrearTarjeta(divPadre,data);
	   
	//     console.log(data,textStatus,xhr);
	//   },
	//   error: function(xhr, textStatus, errorThrown) {
	//     //called when there is an error
	//   }
	// });
	

	
	// var crearDiv = function(class){
	// 	var div = $( "<div/>",{
	// 								"class": class
	// 						  	}
	// 					});
	// 	return div
	// };
	// $.each(data, function(index, val) {
	// 	console.log(val);
	// });

	function CrearTarjeta(divPadre, data){
		debugger;


		$.each(data.data, function(index, val) {

		var divCard= 	$( "<div/>",{
						"class": "card"
				  	}
		);


		var divCardImage = $( "<div/>",{
										"class": "card-image"
								  	}
							);

		var divCardContent = $( "<div/>",{
										"class": "card-content"
								  	}
							);

		var divMediaContent = $( "<div/>",{
										"class": "media-content"
								  	}
							);

		var divMediaLeft = $( "<div/>",{
										"class": "media-left"
								  	}
							);


		var figure =  $( "<figure/>",{
										"class": "image is-4by3"
								  	}
							);

		var image = function (src, alt){
			 var img = $("<img/>",{
				"src" : src,
				"alt" : alt
			});
			 return img;
		};
		  if (val.picture) {
				divCard.append(
								divCardImage.append(
									figure.append(
										image(src=val.picture, alt='')
										)
									)
								);
			return divCard;
		}

		divPadre.append(
			divCard.append(
				divCardContent.append(
						divMediaContent.append('<p>'+
												val.message+
												'<p> '+
												' <small>'+
												val.created_time +
												'</small>')
						)
					)
				);

		console.log(divCard);
		});

	}
	
// <div class="card">
//   <div class="card-image">
//     <figure class="image is-4by3">
//       <img src="http://placehold.it/300x225" alt="">
//     </figure>
//   </div>
//   <div class="card-content">
//     <div class="media">
//       <div class="media-left">
//         <figure class="image is-32x32">
//           <img src="http://placehold.it/64x64" alt="Image">
//         </figure>
//       </div>
//       <div class="media-content">
//         <p class="title is-5">John Smith</p>
//         <p class="subtitle is-6">@johnsmith</p>
//       </div>
//     </div>

//     <div class="content">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>.
//       <a href="#">#css</a> <a href="#">#responsive</a>
//       <br>
//       <small>11:09 PM - 1 Jan 2016</small>
//     </div>
//   </div>
// </div>



});