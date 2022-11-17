import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPhotoIndex: 0,
            photos: this.props.photo_urls
        }
        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
    }

    nextPhoto() {
        const lastIndex = this.state.photos.length - 1;
        const resetIndex = this.state.currentPhotoIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentPhotoIndex + 1;
        this.setState({
            currentPhotoIndex: index
        });
    }

    previousPhoto() {
        const lastIndex = this.state.photos.length - 1;
        const resetIndex = this.state.currentPhotoIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentPhotoIndex - 1;
        this.setState({
            currentPhotoIndex: index
        });
    }

    render() {
        return (
            <div className="carousel"></div>
        );
    }
}

export default Carousel;