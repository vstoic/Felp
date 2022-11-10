class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }
    updateMarkers(businesses){
        console.log("this is updateMarkers");
        const businessesObj = {};
        businesses.forEach(business => businessesObj[business.id] = business);
        
        businesses
            .filter(business => !this.markers[business.id])
    }
    createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({ 
        position, 
        map: this.map, 
        businessId: business.id 
        });
    }

}
export default MarkerManager;