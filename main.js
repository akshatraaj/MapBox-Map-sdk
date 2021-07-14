let latitude=25.635798, longitude=85.107353;

mapboxgl.accessToken = 'pk.eyJ1IjoiYWtzaGF0LXJhYWoiLCJhIjoiY2tyM2o2dzUwMTBqaDJ4cW1ncmlmbjJxcSJ9.vezEdR8BPdWK1cvm1acgdA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 5.5
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }),
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);
