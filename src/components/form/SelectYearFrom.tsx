import React, {FC} from 'react';
import {Select} from "antd";
import _ from "lodash";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {clearYearFrom, setYearFrom} from "../../store/car/slices/yearFromSlice";

const {Option} = Select;

const SelectYearFrom: FC = () => {
    const yearFrom = useAppSelector(state => state.yearFrom.value);
    const dispatch = useAppDispatch()
    console.log('<<yearFrom>>', yearFrom)
    
    const years = _.range(2001, 2023).reverse()
    const yearsStr = years.map(year => String(year))

    const handleSetYearFrom = (value: string) => {
        console.log('yearFrom-value: ', value)
        dispatch(setYearFrom(value))
    }

    const handleClearYearFrom = () => {
        dispatch(clearYearFrom())
    }
    
    return (
        <Select
            placeholder='Год, от'
            style={{width: '100%'}}
            allowClear
            size='large'
            value={yearFrom || null}
            onSelect={handleSetYearFrom}
            onClear={handleClearYearFrom}
        >
            {yearsStr &&
                yearsStr?.map((year) =>
                    (<Option key={year} value={year}>{year}</Option>))
            }
        </Select>
    );
};

export default SelectYearFrom;