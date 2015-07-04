var map = L.map('leaflet-map');
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
// }).addTo(map);
L.tileLayer('http://server.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);

var el = L.control.elevation({
  position: 'bottomleft',
  theme: 'lime-theme', //default: lime-theme
  width: 600,
  height: 125,
  margins: {
    top: 10,
    right: 20,
    bottom: 30,
    left: 50
  },
  useHeightIndicator: true, //if false a marker is drawn at map position
  interpolation: 'linear', //see https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-area_interpolate
  hoverNumber: {
    decimalsX: 3, //decimals on distance (always in km)
    decimalsY: 0, //deciamls on height (always in m)
    formatter: undefined //custom formatter function may be injected
  },
  xTicks: undefined, //number of ticks in x axis, calculated by default according to width
  yTicks: undefined, //number of ticks on y axis, calculated by default according to height
  collapsed: false //collapsed mode, show chart on click or mouseover
});
el.addTo(map);
var rootURL = 'https://raw.githubusercontent.com/MaptimeAlpes/tour-de-france-2015/master/data/gpx/MapMyTrack-Route-Tour-de-Force-2015';
var url = rootURL + 'Stage-01UtrechtPrologue' + '.gpx';
var layer = loadGPX(url);

function loadGPX(url) {
  var lyr = new L.GPX(url, {
    async: true,
    marker_options: {
      startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
      endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
      shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png',
    },
  }).on('loaded', function(e) {
    var gpx = e.target;
    map.fitBounds(gpx.getBounds());
  }).on('addline', function(e) {
    el.addData(e.line);
  }).addTo(map);
  return lyr;
}

var stage = document.getElementById('stage');
stage.addEventListener('change', function() {
  changeStage(stage.value);
});

function changeStage(stage) {
  if (layer) {
    map.removeLayer(layer);
    el.clear();
  }
  url = rootURL + stage + '.gpx' ;
  layer = loadGPX(url);
}
