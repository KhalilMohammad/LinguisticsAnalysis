import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import { selectLemmasCalculation } from "../reducers/LemmasCalculationReducer";

export default function LemmasCalculation() {
  const state = useSelector(selectLemmasCalculation);

  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>Minimum</th>
          <th>Maximum</th>
          <th>Mean</th>
          <th>Median</th>
          <th>Quartile 1</th>
          <th>Quartile 3</th>
          <th>Standard Deviation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{state.allMinimum}</td>
          <td>{state.allMaximum}</td>
          <td>{state.allMean}</td>
          <td>{state.allMedian}</td>
          <td>{state.allQuartile1}</td>
          <td>{state.allQuartine2}</td>
          <td>{state.allStandardDeviation}</td>
        </tr>
      </tbody>
    </Table>
  );
}
