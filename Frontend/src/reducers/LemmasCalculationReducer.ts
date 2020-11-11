import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, LemmasData, LemmasState } from '../types';
import { findMean, quantile, standardDeviation } from '../utils';

declare global {
    interface Window { Lemmas: LemmasData[]; }
}

let lemmasData: LemmasData[];
if (window.Lemmas && window.Lemmas.length > 0)
    lemmasData = window.Lemmas;
else {
    lemmasData = require("../data/lemmas_60k_m1389.json");
    window.Lemmas = lemmasData;
}

export const lemmasCalculationSlice = createSlice({
    name: 'lemmasCalculation',
    initialState: {
        groups: lemmasData,
        allMinimum: 0,
        allMaximum: 0,
        allQuartile1: 0,
        allQuartine2: 0,
        allMedian: 0,
        allMean: 0,
        allStandardDeviation: 0,
    },
    reducers: {
        calculateLemmasCalculation: (state: LemmasState, action: PayloadAction<string>) => {
            const text = action.payload;


            const allFreq = [];

            const currentWords = Array.from(
                new Set<string>(text.split(" ").map((i) => i.toLowerCase()))
            );

            for (let index = 0; index < state.groups.length; index++) {
                const data = state.groups[index];
                if (currentWords.includes(data.lemma)) allFreq.push(Number(data.freq));
            }

            const maximum = Math.max(...allFreq);
            const minimum = Math.min(...allFreq);

            return {
                ...state,
                allMaximum: maximum === -Infinity ? 0 : maximum,
                allMean: findMean(allFreq) || 0,
                allMedian: quantile(allFreq, 0.5),
                allMinimum: minimum === Infinity ? 0 : minimum,
                allQuartile1: quantile(allFreq, 0.25),
                allQuartine2: quantile(allFreq, 0.75),
                allStandardDeviation: standardDeviation(allFreq),
            };
        },
    },
});

export const { calculateLemmasCalculation } = lemmasCalculationSlice.actions;

export const selectLemmasCalculation = (state: AppState) => state.lemmasCalculation;

export default lemmasCalculationSlice.reducer;
