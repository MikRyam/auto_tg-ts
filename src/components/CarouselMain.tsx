import React, {FC} from 'react';
import {Carousel} from "antd";

const CarouselMain: FC = () => {
    
    return (
        <Carousel autoplay 
                  draggable
                  pauseOnHover={true} 
                  pauseOnDotsHover={true} 
                  pauseOnFocus={true} 
                  autoplaySpeed={5000}>
            <div>
                <h3 className='carouselItem'
                    style={{
                    backgroundImage: "url('https://msk.keyauto-probeg.ru/images/1980x700/uploads/slides/7b14fefab4646061f2961b8a8dc9cbee.jpg')"
                }}> </h3>
            </div>
            <div>
                <h3 className='carouselItem'
                    style={{                    
                    backgroundImage: "url('https://msk.keyauto-probeg.ru/images/1980x700/uploads/slides/9bdc3e2d6718e1bb337bbfbe867d9ac1.jpg')"
                }}
                > </h3>
            </div>
        </Carousel>
    );
};

export default CarouselMain;
