import { configureStore } from '@reduxjs/toolkit';
import emotionAnalysisReducer from "../reducers/EmotionAnalysisReducer";
import uniqueWordReducer from "../reducers/UniqueWordReducer";
import lemmasCalculationReducer from "../reducers/LemmasCalculationReducer";
import cpidrReducer from "../reducers/CpidrReducer";

export default configureStore({
    reducer: {
        emotionAnalysis: emotionAnalysisReducer,
        uniqueWork: uniqueWordReducer,
        lemmasCalculation: lemmasCalculationReducer,
        cpidr: cpidrReducer
    },
});
