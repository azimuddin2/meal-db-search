import React from 'react';
import { Carousel } from 'react-bootstrap';
import restaurant from '../../Images/1.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={restaurant}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='lg:mt-5'>Our Restaurant</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;