var mapOptions = {
  center: [59.96838, 30.3175],
  zoom: 18
}

var map = new L.map('map', mapOptions);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

var iconOptions = {
  iconUrl: 'img/map-icon.png',
  iconSize: [38, 50]
}

var customIcon = L.icon(iconOptions);

var markerOptions = {
  title: "MyLocation",
  clickable: true,
  draggable: true,
  icon: customIcon
}

var marker = L.marker([59.96838, 30.3175], markerOptions);
marker.addTo(map);
