import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../types';

export const cpidrReducer = createSlice({
    name: 'cpidr',
    initialState: {
        text: "",
    },
    reducers: {
        calculateCpidr: (state, action: PayloadAction<string>) => {
            return {
                text: action.payload
            }
        },
    },
});

export const { calculateCpidr } = cpidrReducer.actions;

export const selectCpidr = (state: AppState) => state.cpidr;

export default cpidrReducer.reducer;
