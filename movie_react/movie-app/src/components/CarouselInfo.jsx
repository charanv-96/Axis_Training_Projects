import React, { Component } from 'react';

class CarouselInfo extends Component {
    render() {
        return (
            <div>
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://s.studiobinder.com/wp-content/uploads/2019/08/Best-Zombie-Movies-of-All-Time-StudioBinder.jpg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.pinimg.com/originals/75/5d/d5/755dd5fe656eeb2ad8dcde7796226396.jpg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/wp/wp2162756.jpg" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
            </div>
        );
    }
}

export default CarouselInfo;