class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }
    updateMarkers(businesses){
        console.log("this is updateMarkers");
        Object.keys(this.markers).forEach(key => {
            this.markers[key].setMap(null)
            delete this.markers[key]})
        // Object.keys(businesses).forEach(business => {
        //     if (!this.markers[business.id]) {
        //         let markerIndex = businesses.indexOf(business) + 1
        //         this.createMarkerFromBusiness(business, markerIndex);
        //     };
        // });
    }
    createMarkerFromBusiness(business, index) {
    let position = {lat: business.lat, lng: business.lng}
    let marker = new google.maps.Marker({ 
        position: position, 
        label: {text: index.toString(), color: "red"},
        map: this.map, 
        businessId: business.id 
        });
    this.markers[business.id] = marker;
    this.markers[business.id].setMap(this.map);
    }
}
export default MarkerManager;