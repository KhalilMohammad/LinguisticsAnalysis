import React from "react";
import { useSelector } from "react-redux";
import { selectCpidr } from "../reducers/CpidrReducer";

export default () => {
  const state = useSelector(selectCpidr);

  return <pre dangerouslySetInnerHTML={{ __html: state.text }}></pre>;
};
