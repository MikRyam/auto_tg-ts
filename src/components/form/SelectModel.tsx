import React, {FC} from 'react';
import {Select, SelectProps} from "antd";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {addModel, clearModels, removeModel} from "../../store/car/slices/modelSlice";

const {Option, OptGroup} = Select;

const SelectModel: FC = () => {
    const brandsSelected = useAppSelector(state => state.brands.list);
    const modelsSelected = useAppSelector(state => state.models.list);
    const modelsOptions = useAppSelector(state => state.modelsOptions.list);
    const dispatch = useAppDispatch()
    // console.log('<<brandsSelected>>', brandsSelected)
    console.log('<<modelsSelected>>', modelsSelected)
    // console.log('<<modelsOptions>>', modelsOptions)
    
    const brandLabels = brandsSelected.map(brand => brand.label).sort()
    console.log('brandLabels', brandLabels)

    const handleSelectModel = (value: string, option: any) => {
        dispatch(addModel(option))
        console.log('model-value: ', value)
        console.log('Выбрана модель: ', option);
    };

    const handleDeselectModel = (value: string) => {
        dispatch(removeModel(value))
        console.log('Удаляем модель: ', value)
    }

    const handleClearModels = () => {
        dispatch(clearModels())
        console.log('Удалить все модели')
    }

    const selectModelProps: SelectProps = {
        mode: 'multiple',
        style: {width: '100%'},
        size: 'large',
        // loading: isLoading,
        value: modelsSelected,
        // options: data,
        placeholder: 'Выберите марку...',
        allowClear: true,
        showArrow: true,
        showSearch: true,
        maxTagCount: 'responsive',
    };
    
    return (
        <Select
            {...selectModelProps}
            placeholder='Выберите модель...'
            value={modelsSelected}
            notFoundContent="Сначала надо выбрать марку авто"
            onSelect={handleSelectModel}
            onDeselect={handleDeselectModel}
            onClear={handleClearModels}
        >
            {modelsOptions &&
                brandLabels.map((brandName, index) => (
                    <OptGroup key={index + 1} label={brandName}>
                        {modelsOptions
                            .filter((modelBrand) => modelBrand.brand === brandName)
                            .map((model) =>
                                (<Option key={model.id} id={model.id} brand={model.brand}
                                         value={model.value}
                                         label={model.label}>
                                    {model.label}
                                </Option>)
                            )
                        }
                    </OptGroup>
                ))
            }
        </Select>
    );
};

export default SelectModel;