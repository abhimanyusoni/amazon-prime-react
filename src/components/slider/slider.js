import React from 'react';
import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
    {
        name: 'Arrows',
        url: require("./images/David.jpg").default,
    },
    {
        name: 'David',
        url: require("./images/arrows.jpg").default,
    },
    {
        name: 'Gotham',
        url: require("./images/gotham.jpg").default,
    },
    {
        name: 'Sherni',
        url: require("./images/sherni.jpg").default,
    },
    {
        name: 'Sherni',
        url: require("./images/toofan.jpg").default,
    },
]

const HomeSlider = () => {

    const setting = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
    }

        return(
            <div className="home_slider">
                <Slider {...setting}>
                    {photos.map((photo) => {
                        return(
                            <div>
                                <img src = {photo.url} width="100%" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
}

export default HomeSlider;
