jQuery(document).ready(function ($) {
    var map;
    var marker;

    function initialize() {
        var mapOptions = {
                zoom: 14,
                flat: !0,
                scrollwheel: !1,
                panControl: !1,
                zoomControl: !0,
                streetViewControl: !1,
                mapTypeControl: !1,
                styles: [{
                    featureType: "all",
                    elementType: "geometry.fill",
                    stylers: [{
                        weight: "2.00"
                    }]
                }, {
                    featureType: "all",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#9c9c9c"
                    }]
                }, {
                    featureType: "all",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{
                        color: "#f2f2f2"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.medical",
                    elementType: "geometry.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        hue: "#ff0000"
                    }, {
                        invert_lightness: !0
                    }]
                }, {
                    featureType: "poi.medical",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "simplified"
                    }, {
                        invert_lightness: !0
                    }]
                }, {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 45
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#eeeeee"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#7b7b7b"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        color: "#46bcec"
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#c8d7d4"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#070707"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    jQuery('.map-fancybox').on('click', function (event) {
        var lat = jQuery(this).data('lat');
        var lng = jQuery(this).data('lng');
        var pointer = jQuery(this).data('pointer');
        var desc = jQuery(this).data('desc');
        map.setCenter({
            lat : lat,
            lng : lng
        });

        var newLatLng = new google.maps.LatLng(lat, lng);
        marker = new google.maps.Marker({
            position: newLatLng,
            map: map,
            draggable: true,
            icon: pointer,
        });

		var infowindow = new google.maps.InfoWindow({
			content: desc
		});

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });

    // Onload handler to fire off the app.
    google.maps.event.addDomListener(window, 'load', initialize);
});