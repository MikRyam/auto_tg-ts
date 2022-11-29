import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICarModel} from "../types/carModel.type";

type ModelState = {
    list: ICarModel[];
}

// Workaround: cast state instead of declaring variable type
const initialState = {
    list: [],
} as ModelState

const modelOptionSlice = createSlice({
    name: 'modelsOptions',
    initialState,
    reducers: {
        addModelOption(state, action: PayloadAction<ICarModel[]>) {
            // state.list.push(action.payload);
            state.list = [...state.list, ...action.payload];
        },
        removeModelOptionByBrand(state, action: PayloadAction<string>) {
            state.list = state.list.filter(model => model.brand !== action.payload);
        },
        clearModelsOptions(state) {
            state.list = [];
        },
    },
});

export const { addModelOption, removeModelOptionByBrand, clearModelsOptions } = modelOptionSlice.actions;

export default modelOptionSlice.reducer;