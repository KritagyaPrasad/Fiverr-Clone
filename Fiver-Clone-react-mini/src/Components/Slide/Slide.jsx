import React, { Children } from 'react'
import Slider from 'infinite-react-carousel';
import "./Slide.scss";

function Slide({children, slidesToShow, arrowScroll}) {
    return (
        <div className='slide'>
            <div className="container">
                <Slider dots slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

export default Slide