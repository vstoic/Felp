class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }
    updateMarkers(businesses){
        const businessesObj = {};
        businesses.forEach(business => businessesObj[business.id] = business);
        businesses
            .filter(business => !this.markers[business.id])
    }
}
