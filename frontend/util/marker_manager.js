
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};

        this.updateMarkers = this.updateMarkers.bind(this);
        this.updateMarker = this.updateMarker.bind(this);
    }
    handleMarkers(businesses) {
        console.log("0" in businesses);
        if ("0" in businesses) {
            this.updateMarkers(businesses);
        } else {
            this.updateMarker(businesses);
        };
    };
    
    //added a handleMarkers to split the update markers function
    //index page uses a nested object w/ businesses, show page uses a single object with a business

    updateMarkers(businesses){
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

    updateMarker(business){
        console.log(business);
        Object.keys(this.markers).forEach(key => {
            this.markers[key].setMap(null)
            delete this.markers[key]})
        const markerIdx = 1;
        this.createMarkerFromBusiness(business, markerIdx);
    }

    createMarkerFromBusiness(business, index) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    console.log(position)
    const marker = new google.maps.Marker({ 
        position, 
        label: {text: index.toString(), color: "white"},
        // labelstyle: {color: "white"},  (this is not working)
        map: this.map
        });
    this.markers[business.id] = marker;
    this.markers[business.id].setMap(this.map);
    }
}


export default MarkerManager;
