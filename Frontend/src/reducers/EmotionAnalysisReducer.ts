import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, EmotionAnalysisData, EmotionAnalysisState, Group } from '../types';
import { average, standardDeviation } from '../utils';

let groups: Group<EmotionAnalysisData>;
let groupsStr = localStorage.getItem("EmotionAnalysisData");
if (groupsStr)
    groups = JSON.parse(groupsStr);
else {
    const NrcEmotionData: EmotionAnalysisData[] = require("../data/NRC-Emotion-Intensity-Lexicon-v1.json");
    groups = NrcEmotionData.reduce<Group<EmotionAnalysisData>>(function (
        rv,
        x
    ) {
        (rv[x["word"]] = rv[x["word"]] || []).push(x);
        return rv;
    },
        {});
    localStorage.setItem("EmotionAnalysisData", JSON.stringify(groups));
}

const allArr: number[] = [];
const angerArr: number[] = [];
const anticipationArr: number[] = [];
const disgustArr: number[] = [];
const fearArr: number[] = [];
const joyArr: number[] = [];
const sadnessArr: number[] = [];
const surpriseArr: number[] = [];
const trustArr: number[] = [];

for (let [word, wordData] of Object.entries(groups)) {
    console.log(`processing word: ${word}`);
    let anger = 0;
    let anticipation = 0;
    let disgust = 0;
    let fear = 0;
    let joy = 0;
    let sadness = 0;
    let surprise = 0;
    let trust = 0;

    for (let index = 0; index < wordData.length; index++) {
        const data = wordData[index];
        allArr.push(Number(data["emotion-intensity-score"]));

        switch (data.emotion) {
            case "anger":
                anger = Number(data["emotion-intensity-score"]);
                break;
            case "anticipation":
                anticipation = Number(data["emotion-intensity-score"]);
                break;
            case "disgust":
                disgust = Number(data["emotion-intensity-score"]);
                break;
            case "fear":
                fear = Number(data["emotion-intensity-score"]);
                break;
            case "joy":
                joy = Number(data["emotion-intensity-score"]);
                break;
            case "sadness":
                sadness = Number(data["emotion-intensity-score"]);
                break;
            case "surprise":
                surprise = Number(data["emotion-intensity-score"]);
                break;
            case "trust":
                trust = Number(data["emotion-intensity-score"]);
                break;
            default:
                throw new Error("incorrect emotion");
        }
    }

    angerArr.push(anger);
    anticipationArr.push(anticipation);
    disgustArr.push(disgust);
    fearArr.push(fear);
    joyArr.push(joy);
    sadnessArr.push(sadness);
    surpriseArr.push(surprise);
    trustArr.push(trust);
}

export const emotionAnalysisSlice = createSlice({
    name: 'emotionAnalysis',
    initialState: {
        allAverage: average(allArr),
        allStandardDeviation: standardDeviation(allArr),
        angerAverage: average(angerArr),
        angerStandardDeviation: standardDeviation(angerArr),
        anticipationAverage: average(anticipationArr),
        anticipationStandardDeviation: standardDeviation(anticipationArr),
        disgustAverage: average(disgustArr),
        disgustStandardDeviation: standardDeviation(disgustArr),
        fearAverage: average(fearArr),
        fearStandardDeviation: standardDeviation(fearArr),
        joyAverage: average(joyArr),
        joyStandardDeviation: standardDeviation(joyArr),
        sadnessAverage: average(sadnessArr),
        sadnessStandardDeviation: standardDeviation(sadnessArr),
        surpriseAverage: average(surpriseArr),
        surpriseStandardDeviation: standardDeviation(surpriseArr),
        trustAverage: average(trustArr),
        trustStandardDeviation: standardDeviation(trustArr),

        allPhraseAverage: 0,
        allPhraseStandardDeviation: 0,
        angerPhraseAverage: 0,
        angerPhraseStandardDeviation: 0,
        anticipationPhraseAverage: 0,
        anticipationPhraseStandardDeviation: 0,
        disgustPhraseAverage: 0,
        disgustPhraseStandardDeviation: 0,
        fearPhraseAverage: 0,
        fearPhraseStandardDeviation: 0,
        joyPhraseAverage: 0,
        joyPhraseStandardDeviation: 0,
        sadnessPhraseAverage: 0,
        sadnessPhraseStandardDeviation: 0,
        surprisePhraseAverage: 0,
        surprisePhraseStandardDeviation: 0,
        trustPhraseAverage: 0,
        trustPhraseStandardDeviation: 0,

        groups: groups,
    },
    reducers: {
        calculateEmotionAnalysis: (state: EmotionAnalysisState, action: PayloadAction<string>) => {
            const text = action.payload;
            const allPhraseArr: number[] = [];
            const angerPhraseArr: number[] = [];
            const anticipationPhraseArr: number[] = [];
            const disgustPhraseArr: number[] = [];
            const fearPhraseArr: number[] = [];
            const joyPhraseArr: number[] = [];
            const sadnessPhraseArr: number[] = [];
            const surprisePhraseArr: number[] = [];
            const trustPhraseArr: number[] = [];

            const currentWords = Array.from(
                new Set<string>(text.split(" ").map((i) => i.toLowerCase()))
            );

            for (let [word, wordData] of Object.entries(state.groups)) {
                console.log(`processing word: ${word}`);
                let anger = 0;
                let anticipation = 0;
                let disgust = 0;
                let fear = 0;
                let joy = 0;
                let sadness = 0;
                let surprise = 0;
                let trust = 0;

                if (currentWords.includes(word))
                    for (let index = 0; index < wordData.length; index++) {
                        const data = wordData[index];

                        allPhraseArr.push(Number(data["emotion-intensity-score"]));

                        switch (data.emotion) {
                            case "anger":
                                anger = Number(data["emotion-intensity-score"]);
                                break;
                            case "anticipation":
                                anticipation = Number(data["emotion-intensity-score"]);
                                break;
                            case "disgust":
                                disgust = Number(data["emotion-intensity-score"]);
                                break;
                            case "fear":
                                fear = Number(data["emotion-intensity-score"]);
                                break;
                            case "joy":
                                joy = Number(data["emotion-intensity-score"]);
                                break;
                            case "sadness":
                                sadness = Number(data["emotion-intensity-score"]);
                                break;
                            case "surprise":
                                surprise = Number(data["emotion-intensity-score"]);
                                break;
                            case "trust":
                                trust = Number(data["emotion-intensity-score"]);
                                break;
                            default:
                                throw new Error("incorrect emotion");
                        }
                    }
                else allPhraseArr.push(0);

                if (currentWords.includes(word)) {
                    angerPhraseArr.push(anger);
                    anticipationPhraseArr.push(anticipation);
                    disgustPhraseArr.push(disgust);
                    fearPhraseArr.push(fear);
                    joyPhraseArr.push(joy);
                    sadnessPhraseArr.push(sadness);
                    surprisePhraseArr.push(surprise);
                    trustPhraseArr.push(trust);
                }
            }

            return {
                ...state,
                allPhraseAverage: average(allPhraseArr),
                allPhraseStandardDeviation: standardDeviation(allPhraseArr),
                angerPhraseAverage: average(angerPhraseArr),
                angerPhraseStandardDeviation: standardDeviation(angerPhraseArr),
                anticipationPhraseAverage: average(anticipationPhraseArr),
                anticipationPhraseStandardDeviation: standardDeviation(
                    anticipationPhraseArr
                ),
                disgustPhraseAverage: average(disgustPhraseArr),
                disgustPhraseStandardDeviation: standardDeviation(disgustPhraseArr),
                fearPhraseAverage: average(fearPhraseArr),
                fearPhraseStandardDeviation: standardDeviation(fearPhraseArr),
                joyPhraseAverage: average(joyPhraseArr),
                joyPhraseStandardDeviation: standardDeviation(joyPhraseArr),
                sadnessPhraseAverage: average(sadnessPhraseArr),
                sadnessPhraseStandardDeviation: standardDeviation(sadnessPhraseArr),
                surprisePhraseAverage: average(surprisePhraseArr),
                surprisePhraseStandardDeviation: standardDeviation(surprisePhraseArr),
                trustPhraseAverage: average(trustPhraseArr),
                trustPhraseStandardDeviation: standardDeviation(trustPhraseArr),
            }
        },
    },
});

export const { calculateEmotionAnalysis } = emotionAnalysisSlice.actions;

export const selectEmotionAnalysis = (state: AppState) => state.emotionAnalysis;

export default emotionAnalysisSlice.reducer;