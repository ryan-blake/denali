$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('.navigation').addClass("sticky");
  }
  else{
    $('.navigation').removeClass("sticky");
  }
});

$( document ).ready( function() {


	//Google Maps JS
	//Set Map
	function initialize() {
			var myLatlng = new google.maps.LatLng(32.825718, -96.997908);
			var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
			var mapOptions = {
				zoom: 8,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		//Callout Content
		var contentString = '';
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 300
		});

		//Add Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: imagePath,
			title: ''
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});
