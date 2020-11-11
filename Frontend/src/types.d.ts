export interface Group<T> {
    [key: string]: T[];
}

export interface EmotionAnalysisData {
    word: string;
    emotion: string;
    "emotion-intensity-score": string;
}

export interface EmotionAnalysisState {
    allAverage: number;
    allStandardDeviation: number;
    angerAverage: number;
    angerStandardDeviation: number;
    anticipationAverage: number;
    anticipationStandardDeviation: number;
    disgustAverage: number;
    disgustStandardDeviation: number;
    fearAverage: number;
    fearStandardDeviation: number;
    joyAverage: number;
    joyStandardDeviation: number;
    sadnessAverage: number;
    sadnessStandardDeviation: number;
    surpriseAverage: number;
    surpriseStandardDeviation: number;
    trustAverage: number;
    trustStandardDeviation: number;
    allPhraseAverage: number;
    allPhraseStandardDeviation: number;
    angerPhraseAverage: number;
    angerPhraseStandardDeviation: number;
    anticipationPhraseAverage: number;
    anticipationPhraseStandardDeviation: number;
    disgustPhraseAverage: number;
    disgustPhraseStandardDeviation: number;
    fearPhraseAverage: number;
    fearPhraseStandardDeviation: number;
    joyPhraseAverage: number;
    joyPhraseStandardDeviation: number;
    sadnessPhraseAverage: number;
    sadnessPhraseStandardDeviation: number;
    surprisePhraseAverage: number;
    surprisePhraseStandardDeviation: number;
    trustPhraseAverage: number;
    trustPhraseStandardDeviation: number;
    groups: Group<EmotionAnalysisData>;
}

export interface UniqueWorkState {
    totalWords: number,
    uniqueWords: number,
}


export interface LemmasData {
    rank: string;
    lemma: string;
    PoS: string;
    freq: string;
    perMil: string;
    "%caps": string;
    "%allC": string;
    range: string;
    disp: string;
    blog: string;
    web: string;
    TVM: string;
    spok: string;
    fic: string;
    mag: string;
    news: string;
    acad: string;
    blogPM: string;
    webPM: string;
    TVMPM: string;
    spokPM: string;
    ficPM: string;
    magPM: string;
    newsPM: string;
    acadPM: string;
}

export interface LemmasState {
    allMinimum: number;
    allMaximum: number;
    allQuartile1: number;
    allQuartine2: number;
    allMedian: number;
    allMean: number;
    allStandardDeviation: number;

    groups: LemmasData[]
}

export interface CpidrState {
    text: string;
}

export interface AppState {
    emotionAnalysis: EmotionAnalysisState,
    uniqueWork: UniqueWorkState
    lemmasCalculation: LemmasState
    cpidr: CpidrState;
}