import React, {FC} from 'react';
import {useAppSelector} from "../store/hooks";

const ResultPage: FC = () => {
    const brandsSelected = useAppSelector(state => state.brands.list);
    const modelsSelected = useAppSelector(state => state.models.list);
    const yearFrom = useAppSelector(state => state.yearFrom.value);
    const brandLabels = brandsSelected.map(brand => brand.label).sort();    
    
    return (
        <div className='resultsWrapper'>
            <h2> Модели автомобилей с {yearFrom || '2001' } года</h2>
            <div className='results'>                
                {
                    brandLabels?.map((brandName, index) => (
                        <div className='brandResult' key={index + 1}><h2>{brandName}</h2>
                            {modelsSelected
                                .filter((modelBrand) => modelBrand.brand === brandName)
                                .map((model) =>
                                    (<p className='modelResult' key={model.id}>
                                        {model.label}
                                    </p>)
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ResultPage;