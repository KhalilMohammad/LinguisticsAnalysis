import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, UniqueWorkState } from '../types';

export const uniqueWorkSlice = createSlice({
    name: 'uniqueWork',
    initialState: {
        totalWords: 0,
        uniqueWords: 0,
    },
    reducers: {
        calculateUniqueWork: (state: UniqueWorkState, action: PayloadAction<string>) => {
            const values = action.payload.split(" ").map((i) => i.toLowerCase());
            return {
                totalWords: values.length,
                uniqueWords: new Set(values).size,
            }
        },
    },
});

export const { calculateUniqueWork } = uniqueWorkSlice.actions;

export const selectUniqueWork = (state: AppState) => state.uniqueWork;

export default uniqueWorkSlice.reducer;
