import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IRequestSuccess} from "../types/requestSuccess";

type requestSuccessState = {
    value: IRequestSuccess;
}

const initialState: requestSuccessState = {
    value: {
        brands: [],
        models: [],
        yearFrom: '',
    },
}

const requestSuccessSlice = createSlice({
    name: 'requestSuccess',
    initialState,
    reducers: {        
        setRequestSuccess(state, action: PayloadAction<IRequestSuccess>) {
            state.value = (action.payload);
        },
    },
});

export const { setRequestSuccess } = requestSuccessSlice.actions;

export default requestSuccessSlice.reducer;