import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {clearBrands} from "../../store/car/slices/brandSlice";
import {clearModels} from "../../store/car/slices/modelSlice";
import {clearYearFrom} from "../../store/car/slices/yearFromSlice";
import {setRequestSuccess} from "../../store/car/slices/requestSuccessSlice";
import {IRequestSuccess} from "../../store/car/types/requestSuccess";

const FormButtons: FC = () => {
    const brandsSelected = useAppSelector(state => state.brands.list);
    const modelsSelected = useAppSelector(state => state.models.list);
    const yearFrom = useAppSelector(state => state.yearFrom.value);
    const dispatch = useAppDispatch()

    const requestSuccess: IRequestSuccess = {
        brands: brandsSelected,
        models: modelsSelected,
        yearFrom: yearFrom
    }
    
    const handleSubmitForm = () => {
        dispatch(setRequestSuccess(requestSuccess))
        console.log('Success:', requestSuccess)
    }
    
    const onReset = () => {
        dispatch(clearBrands())
        dispatch(clearModels())
        dispatch(clearYearFrom())
    }

    return (
        <div className='formButtons'>
            <Link to='/result' style={{width: '100%'}}>
                <Button block type="primary" htmlType="submit" size="large" onClick={handleSubmitForm}>
                    Показать {modelsSelected.length || 'все'}
                </Button>
            </Link>
            <Button block htmlType="button" size="large" onClick={onReset}>
                Сбросить
            </Button>
        </div>
    );
};

export default FormButtons;