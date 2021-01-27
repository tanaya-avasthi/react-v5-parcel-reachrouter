import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };

    //this.handleIndexClick = this.handleIndexClick.bind(this);
  }
  //take set of props and give a new state back
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  handleIndexClick = (event) => {
    this.setState({
      //convert to no since dome always returns a string
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //todo: use button instead of img for better accessbility
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
