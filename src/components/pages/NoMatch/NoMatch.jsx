import React, { useEffect } from "react";

export default function NoMatch() {
  useEffect(() => {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const footerHeight = document.querySelector(".footer").offsetHeight;
    document.querySelector(".noMatch").style.minHeight = `calc(100vh - (${
      headerHeight + footerHeight
    }px))`;
  }, []);

  return <div className="noMatch">Je suis la page no match !</div>;
}
