import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./NoMatch.scss";

export default function NoMatch() {
  useEffect(() => {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const footerHeight = document.querySelector(".footer").offsetHeight;
    document.querySelector(".noMatch").style.minHeight = `calc(100vh - (${
      headerHeight + footerHeight
    }px))`;
  }, []);

  return (
    <div className="noMatch">
      <h2 className="noMatch_oops">Oops...</h2>
      <h3 className="noMatch_informations">
        La page demandée n'est pas disponible actuellement !
      </h3>
      <Link to="/#" className="noMatch_button">
        Retour à la page d'accueil
      </Link>
    </div>
  );
}
