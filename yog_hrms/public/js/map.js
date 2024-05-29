// console.log("map.js called from hooks");
let script_ = document.createElement('script');
const apiKey = 'AIzaSyDct7s9kNaSv2jbX4Y4TaOSbbtFLgEn9vg'
script_.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
script_.defer = true;
script_.async = true;
// Attach your callback function to the `window` object
window.initMap = function() {
	// JS API is loaded and available
};
// Append the 'script_' element to 'head'
document.head.appendChild(script_);