import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			// makes a new embeded map
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon // this mismatch is cuz google maps expects 'lng' property but from our weather api we get the 'lon' property
			}
		});
	}

	render() {
		return <div ref="map" />;
	}
}

export default GoogleMap;
