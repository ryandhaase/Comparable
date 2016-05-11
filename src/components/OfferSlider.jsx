import React, { Component } from 'react';
import Slider from 'react-slick';

export default class OfferSlider extends Component {
  render() {
    const { profileData } = this.props;

    let offerCards = profileData.map((offer) => {
      return (
        <div className="offerCard text-center">
          <h4 className="cardTitle">{offer.title}</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Salary</th>
                <th className="text-center">Equity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">{offer.salary / 1000}k</td>
                <td className="text-center">{offer.equity}%</td>
              </tr>
            </tbody>
          </table>
          <btn id="offer-btn">View</btn>
        </div>
      );
    });

    let sliderOptions = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="container">
        <Slider {...sliderOptions}>
          {offerCards}
        </Slider>
      </div>
    );
  }
}
