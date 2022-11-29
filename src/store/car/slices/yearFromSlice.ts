import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface yearFromState {
    value: string
}

const initialState: yearFromState = {
    value: '',
}


const yearFromSlice = createSlice({
    name: 'yearFrom',
    initialState,
    reducers: {
        setYearFrom(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },        
        clearYearFrom(state) {
            state.value = '';
        },
        
    },
});

export const { setYearFrom, clearYearFrom } = yearFromSlice.actions;

export default yearFromSlice.reducer;