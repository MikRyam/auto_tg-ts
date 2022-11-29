import React, {FC} from 'react';
import {useGetCarBrandsQuery} from "../../store/car/car.api";
import SelectBrand from "./SelectBrand";
import SelectModel from "./SelectModel";
import SelectYearFrom from "./SelectYearFrom";
import FormButtons from "./FormButtons";
import {Skeleton} from "antd";

const FormMain: FC = () => {
    const {isLoading, isError} = useGetCarBrandsQuery(100)

    return (
        <div className="formWrapper">
            <Skeleton 
                active 
                loading={isLoading} 
                title={{width: 300}}                      
                paragraph={{
                          rows: 5,
                          width: [360, 360, 360, 360, 360]
                      }}
            >
                {/*{isLoading ? 'loading...' : ''}*/}
                {isError && 'Ошибка загрузки данных'}
                <h3>Выберите модели авто</h3>
                <div className='form'>
                    <SelectBrand/>
                    <SelectModel/>
                    <SelectYearFrom/>
                    <FormButtons/>
                </div>
            </Skeleton>
        </div>
    );
};

export default FormMain;