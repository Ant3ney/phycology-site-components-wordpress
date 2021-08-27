<?php wp_footer() ?>

<!-- Footer element -->
<div class='white-maker'> 
	<div id='footer-section'>
		<div class='footer-col col-6 col-sm-3'>
			<a href='/mft-anthony'>MFT Anthony</a>
		</div>
		<div class='footer-col col-6 col-sm-3'>
			<a href='http://localhost/mft-anthony/about-me/'>About Me</a>
		</div>
		<div class='footer-col col-6 col-sm-3'>
			<a href='http://localhost/mft-anthony/contact-me/'>Contact Me</a>
		</div>
		<div class='footer-col col-6 col-sm-3'>
		</div>
	</div>
</div>
<script>
/* Google maps implimentation */
/* key: AIzaSyCEDQ4-UNgDqmkhyMsKFXoCT01xIrgvVAA */
let map;
let service;
let infowindow;

function initMap() {
	const sydney = new google.maps.LatLng(-33.867, 151.195);
	infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map(document.getElementById('google-map'), {
		center: sydney,
		zoom: 15,
	});
	const request = {
		query: '22219 Polos Verdes Boulevard',
		fields: ['name', 'geometry'],
	};
	service = new google.maps.places.PlacesService(map);
	service.findPlaceFromQuery(request, (results, status) => {
		if (status === google.maps.places.PlacesServiceStatus.OK && results) {
			for (let i = 0; i < results.length; i++) {
				createMarker(results[i]);
			}
			map.setCenter(results[0].geometry.location);
		}
	});
}

function createMarker(place) {
	if (!place.geometry || !place.geometry.location) return;
	const marker = new google.maps.Marker({
		map,
		position: place.geometry.location,
	});
	google.maps.event.addListener(marker, 'click', () => {
		infowindow.setContent(place.name || '');
		infowindow.open(map);
	});
}

window.initMap = initMap;
</script>
<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCEDQ4-UNgDqmkhyMsKFXoCT01xIrgvVAA&libraries=places&callback=initMap'></script>
</body>
</html>