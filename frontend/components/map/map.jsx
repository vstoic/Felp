import React from "react";
import { withRouter } from 'react-router-dom';

    const mapOptions = {
        center: { lat: 40.76068220846901, lng: -73.83302248127391 },
        zoom: 13
    };

class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
    //     this.MarkerManager = new MarkerManager(this.map);
    }
    render() {
        return (
            <div className="map-container" ref="map" >
                Map
            </div>
        )
    }
};

export default withRouter(Map);