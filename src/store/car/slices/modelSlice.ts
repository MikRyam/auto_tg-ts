import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICarModel} from "../types/carModel.type";

type ModelState = {
    list: ICarModel[];
}

// Workaround: cast state instead of declaring variable type
const initialState = {
    list: [],
} as ModelState

const modelSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        addModel(state, action: PayloadAction<ICarModel>) {
            state.list.push(action.payload);
        },
        removeModel(state, action: PayloadAction<string>) {
            state.list = state.list.filter(model => model.value !== action.payload);
        },
        removeModelByBrand(state, action: PayloadAction<string>) {
            state.list = state.list.filter(model => model.brand !== action.payload);
        },
        clearModels(state) {
            state.list = [];
        },
    },
});

export const { addModel, removeModel, removeModelByBrand, clearModels } = modelSlice.actions;

export default modelSlice.reducer;