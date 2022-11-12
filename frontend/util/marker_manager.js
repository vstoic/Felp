class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }
    updateMarkers(businesses){
        // console.log(businesses);
        Object.keys(this.markers).forEach(key => {
            this.markers[key].setMap(null)
            delete this.markers[key]})
        for (let [each, business] of Object.entries(businesses)) {
            if (!this.markers[business.id]) {
                const markerIdx = parseInt(each) + 1;
                this.createMarkerFromBusiness(business, markerIdx);
            };
        };
    }
    createMarkerFromBusiness(business, index) {
    let newPosition = {lat: business.lat, lng: business.lng}
    console.log(newPosition);
    let marker = new google.maps.Marker({ 
        position: newPosition, 
        label: {text: index.toString(), color: "red"},
        map: this.map, 
        });
    this.markers[business.id] = marker;
    this.markers[business.id].setMap(this.map);
    }
}
export default MarkerManager;