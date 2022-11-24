import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPhotoIndex: 0,
            photos: this.props.photos,
            arrLength: this.props.photos.length - 1
        }
        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
    }
    // resetIndex if the the currentPhotoIndex is the last photo in the array
    // when nextPhoto is if the resetIndex is true, set the currentPhotoIndex to 0 else add one to the index
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
            <div className="carousel-container">
                <div className="carousel">
                    <button className="prev-img" onClick={() => this.previousPhoto()}>❮</button>
                        <div className="carousel-image-container">
                            {/* <img className="business-index-photo" src={this.state.photos[this.state.currentPhotoIndex]} alt="" /> */}
                            <img className="business-index-photo" src={this.state.photos[this.state.currentPhotoIndex + 1]} alt="" />
                            {/* <img className="business-index-photo" src={this.state.photos[this.state.currentPhotoIndex + 2]} alt="" /> */}
                        </div>
                    <button className="next-img" onClick={() => this.nextPhoto()}>❯</button>
                </div>
            </div>
        );
    }
}
export default Carousel;