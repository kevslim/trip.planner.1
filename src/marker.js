// const mapboxgl = require("mapbox-gl");
import mapboxgl from 'mapbox-gl'

function makeMarker(type, coordinates) {
	const ele = document.createElement("div");
	ele.style.width = "32px";
	ele.style.height = "39px";
	if(type === "activity") {
		ele.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
	}
	else if(type === "hotel") {
		ele.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
	}
	else if(type === "restaurant") {
		ele.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
	}
	return new mapboxgl.Marker(ele).setLngLat(coordinates);
};


export default makeMarker
