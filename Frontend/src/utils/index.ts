export const standardDeviation = (values: number[]) => {
    const avg = average(values);

    const squareDiffs = values.map(function (value) {
        const diff = value - avg;
        const sqrDiff = diff * diff;
        return sqrDiff;
    });

    const avgSquareDiff = average(squareDiffs);

    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev || 0;
}

export const average = (array: number[]) => sum(array) / array.length;

export const findMean = (values: number[]) => {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length || 0;
}

export const asc = (values: number[]) => values.sort((a, b) => a - b);

export const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

export const quantile = (values: number[], q: number) => {
    const sorted = asc(values);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]) || 0;
    } else {
        return sorted[base] || 0;
    }
};