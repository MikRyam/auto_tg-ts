import React, {FC} from 'react';
import {Select, SelectProps} from "antd";
import {ICarBrand} from "../../store/car/types/carBrand.type";
import {addBrand, clearBrands, removeBrand} from "../../store/car/slices/brandSlice";
import axios from "axios";
import {ICarModel} from "../../store/car/types/carModel.type";
import {IBrandModel} from "../../store/car/types/brandModel.type";
import {addModelOption, clearModelsOptions, removeModelOptionByBrand} from "../../store/car/slices/modelOptionSlice";
import {clearModels, removeModelByBrand} from "../../store/car/slices/modelSlice";
import {useGetCarBrandsQuery} from "../../store/car/car.api";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
// import brandsData from "../mockdata/brandsData";

const SelectBrand: FC = () => {
    const {data: brands = [], isLoading} = useGetCarBrandsQuery(100)
    // const brands = brandsData
    const brandsSelected = useAppSelector(state => state.brands.list);
    const modelsOptions = useAppSelector(state => state.modelsOptions.list);
    const dispatch = useAppDispatch()
    console.log('<<brandsSelected>>', brandsSelected)
    console.log('<<modelsOptions>>', modelsOptions)

    const handleSelectBrand = async (value: string, option: ICarBrand) => {
        dispatch(addBrand(option))   
        console.log('brand-value: ', value)
        const modelsDataFetched = await axios.get(`http://193.124.186.252:8956/api/modellist/${option.id}`)
        const modelsData = modelsDataFetched.data
        const modelsDataNormalized: ICarModel[] = modelsData.map((model: IBrandModel) => {
            return {
                id: String(Math.floor(Math.random() * 99999)),
                brand: `${value}`,
                value: model.value,
                label: model.label,
            }
        })
        const currentModelsLabels = modelsOptions.map((model) => model.label)
        const modelsFiltered: ICarModel[] = modelsDataNormalized.filter((model) => !currentModelsLabels.includes(model.label))
        dispatch(addModelOption(modelsFiltered))
    }

    const handleDeselectBrand = (value: string, option: ICarBrand) => {
        dispatch(removeBrand(option))
        dispatch(removeModelByBrand(value))
        dispatch(removeModelOptionByBrand(value))
        console.log('Brand Removed!!!!!', option.id)
    }

    const handleClearBrands = () => {
        dispatch(clearBrands())
        dispatch(clearModels())
        dispatch(clearModelsOptions())        
    }
    
    const selectProps: SelectProps = {
        mode: 'multiple',
        style: {width: '100%'},
        size: 'large',
        loading: isLoading,
        // value,
        // options: data,
        placeholder: 'Выберите марку...',
        allowClear: true,
        showArrow: true,
        showSearch: true,
        maxTagCount: 'responsive',
    };
    
    return (
        <Select {...selectProps}
                placeholder='Выберите марку...'
                notFoundContent="Нет данных"
                value={brandsSelected}
                options={brands}
                onSelect={handleSelectBrand}
                onDeselect={handleDeselectBrand}
                onClear={handleClearBrands}
        />
    );
};

export default SelectBrand;