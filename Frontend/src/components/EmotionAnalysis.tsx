import React from "react";
import { Table, CardSubtitle } from "reactstrap";
import { useSelector } from "react-redux";

import { selectEmotionAnalysis } from "../reducers/EmotionAnalysisReducer";

function EmotionAnalysis() {
  const state = useSelector(selectEmotionAnalysis);

  console.log("EmotionAnalysis")

  return (
    <>
      <CardSubtitle className="text-left mb-4 font-weight-bolder">
        Complete
      </CardSubtitle>
      <Table size="sm">
        <thead>
          <tr>
            <th></th>
            <th>All</th>
            <th>Anger</th>
            <th>Anticipation</th>
            <th>Disgust</th>
            <th>Fear</th>
            <th>Joy</th>
            <th>Sadness</th>
            <th>Surprise</th>
            <th>Trust</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Average</td>
            <td>{state.allAverage}</td>
            <td>{state.angerAverage}</td>
            <td>{state.anticipationAverage}</td>
            <td>{state.disgustAverage}</td>
            <td>{state.fearAverage}</td>
            <td>{state.joyAverage}</td>
            <td>{state.sadnessAverage}</td>
            <td>{state.surpriseAverage}</td>
            <td>{state.trustAverage}</td>
          </tr>
          <tr>
            <td>Standard Deviation</td>
            <td>{state.allStandardDeviation}</td>
            <td>{state.angerStandardDeviation}</td>
            <td>{state.anticipationStandardDeviation}</td>
            <td>{state.disgustStandardDeviation}</td>
            <td>{state.fearStandardDeviation}</td>
            <td>{state.joyStandardDeviation}</td>
            <td>{state.sadnessStandardDeviation}</td>
            <td>{state.surpriseStandardDeviation}</td>
            <td>{state.trustStandardDeviation}</td>
          </tr>
        </tbody>
      </Table>
      <hr></hr>
      <CardSubtitle className="text-left mb-4 font-weight-bolder">
        Phrase
      </CardSubtitle>
      <Table size="sm">
        <thead>
          <tr>
            <th></th>
            <th>All</th>
            <th>Anger</th>
            <th>Anticipation</th>
            <th>Disgust</th>
            <th>Fear</th>
            <th>Joy</th>
            <th>Sadness</th>
            <th>Surprise</th>
            <th>Trust</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Average</td>
            <td>{state.allPhraseAverage}</td>
            <td>{state.angerPhraseAverage}</td>
            <td>{state.anticipationPhraseAverage}</td>
            <td>{state.disgustPhraseAverage}</td>
            <td>{state.fearPhraseAverage}</td>
            <td>{state.joyPhraseAverage}</td>
            <td>{state.sadnessPhraseAverage}</td>
            <td>{state.surprisePhraseAverage}</td>
            <td>{state.trustPhraseAverage}</td>
          </tr>
          <tr>
            <td>Standard Deviation</td>
            <td>{state.allPhraseStandardDeviation}</td>
            <td>{state.angerPhraseStandardDeviation}</td>
            <td>{state.anticipationPhraseStandardDeviation}</td>
            <td>{state.disgustPhraseStandardDeviation}</td>
            <td>{state.fearPhraseStandardDeviation}</td>
            <td>{state.joyPhraseStandardDeviation}</td>
            <td>{state.sadnessPhraseStandardDeviation}</td>
            <td>{state.surprisePhraseStandardDeviation}</td>
            <td>{state.trustPhraseStandardDeviation}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default EmotionAnalysis;
