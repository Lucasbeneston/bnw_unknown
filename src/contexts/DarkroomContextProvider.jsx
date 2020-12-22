import React, { useState } from "react";
import PropTypes from "prop-types";
import DarkroomContext from "./DarkroomContext";

export default function HeaderContextProvider({ children }) {
  const [darkroom, setDarkroom] = useState(false);

  const contextValues = {
    darkroom,
    setDarkroom,
  };

  return (
    <DarkroomContext.Provider value={contextValues}>
      {children}
    </DarkroomContext.Provider>
  );
}

HeaderContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
