import React, {FC} from 'react';
import FormMain from "../components/form/FormMain";
import CarouselMain from "../components/CarouselMain";

const HomePage: FC = () => {
    
    return (
        <div className='contentWrapper'>
            <CarouselMain/>
            <FormMain/>
        </div>
    );
};

export default HomePage;