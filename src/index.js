// const mapboxgl = require("mapbox-gl");
import mapboxgl from 'mapbox-gl'
import makeMarker from './marker';

mapboxgl.accessToken = "pk.eyJ1Ijoia2V2bGltIiwiYSI6ImNqaW0zdnc0cDAwMzgzcW5pOWExbDVrNm4ifQ.E6y3_2KOCkYMvTHgXT_OFw";


const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// const ele = document.createElement("div");
// ele.style.width = "32px";
// ele.style.height = "39px";
// ele.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker2 = makeMarker("hotel", [-87.6234804, 41.8903948]);
marker2.addTo(map);
