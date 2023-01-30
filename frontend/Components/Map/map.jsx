import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../Util/marker_manager";

const mapOptions = {
    center: { lat: 40.76068220846901, lng: -73.83302248127391 },
    zoom: 5,
};

class Map extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        // this.state = { business: this.props.businesses }
    }
    componentDidMount() {
        // console.log(this.props)
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.handleMarkers(this.props.businesses);
        // this.MarkerManager = new MarkerManager(this.props.businesses);
    }
    componentDidUpdate() {
        this.MarkerManager.handleMarkers(this.props.businesses);
    }
    render() {
        return (
            <div className="map-container" ref="map">
                Map
            </div>
        );
    }
}

export default Map;
