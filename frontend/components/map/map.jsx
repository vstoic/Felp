import React from "react";
import { withRouter } from 'react-router-dom';
import MarkerManager from "../../util/marker_manager";

    const mapOptions = {
        center: { lat: 40.76068220846901, lng: -73.83302248127391 },
        zoom: 13
    };

class Map extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { business: this.props.businesses }
    }
    componentDidMount() {
        // console.log(this.state)
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.props.businesses);

    }
    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses);
    }
    render() {
        return (
            <div className="map-container" ref="map" >
                Map
            </div>
        )
    }
};

export default Map;