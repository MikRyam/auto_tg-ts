import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICarBrand} from "../types/carBrand.type";

type BrandState = {
    list: ICarBrand[] ;
}

// const initialState: BrandState = {
//     list: [],
// }
// Workaround: cast state instead of declaring variable type
const initialState = {
    list: [],
} as BrandState

const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        // addBrand(state, action: PayloadAction<string>) {
        //     state.list.push({
        //         id: action.payload,
        //         value: action.payload,
        //         label: action.payload,
        //     });
        // },               
        // removeBrand(state, action: PayloadAction<string>) {
        //     state.list = state.list.filter(brand => brand.id !== action.payload);
        // },
        addBrand(state, action: PayloadAction<ICarBrand>) {
            state.list.push(action.payload);
        },
        removeBrand(state, action: PayloadAction<{ id: string }>) {
            state.list = state.list.filter(brand => brand.id !== action.payload.id);
        },
        clearBrands(state) {
            state.list = [];
        },
        onChangeBrand(state, action: PayloadAction<ICarBrand[]>) {
            state.list = (action.payload);
        },
    },
});

export const { addBrand, removeBrand, onChangeBrand, clearBrands } = brandSlice.actions;

export default brandSlice.reducer;