import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import DarkroomContext from "../../../contexts/DarkroomContext";
import Eye from "../SVGR/Eye";

import "./CustomCursor.scss";

export default function CustomCursor() {
  const location = useLocation();
  const context = useContext(DarkroomContext);
  const { darkroom } = context;

  useEffect(() => {
    //  Cursor effect when is not mobile
    if (!isMobile) {
      const mouseCursor = document.querySelector(".cursor");
      const header = document.querySelector(".header");
      const links = document.querySelectorAll("a");
      const buttons = document.querySelectorAll("button");
      const pictures = document.querySelectorAll("figure");
      const cursorIcon = document.querySelector(".cursor_icon");
      const pictureSelected = document.querySelector(".pictureSelected figure");

      const cursor = (e) => {
        mouseCursor.style.top = `${e.clientY}px`;
        mouseCursor.style.left = `${e.clientX}px`;
      };

      window.addEventListener("mousemove", cursor);

      // General cursor effect
      cursorIcon.style.display = "none";
      document.body.addEventListener("mouseenter", () => {
        if (!darkroom) {
          mouseCursor.style.border = "2px solid #646464";
        } else {
          mouseCursor.style.border = "2px solid white";
        }
      });

      // Switch darkroom cursor effect
      if (!darkroom) {
        mouseCursor.style.borderColor = "#646464";
      } else {
        mouseCursor.style.borderColor = "white";
      }

      // Header hover effect
      header.addEventListener("mouseleave", () => {
        mouseCursor.style.border = "2px solid #646464";
        if (!darkroom) {
          mouseCursor.style.borderColor = "#646464";
        } else {
          mouseCursor.style.borderColor = "white";
        }
      });

      header.addEventListener("mouseover", () => {
        mouseCursor.style.border = "2px solid white";
      });

      // Links effect
      links.forEach((link) => {
        link.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("buttonLinks-grow");
        });
        link.addEventListener("mouseover", () => {
          mouseCursor.classList.add("buttonLinks-grow");
        });
      });

      // Buttons effect
      buttons.forEach((button) => {
        button.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("buttonLinks-grow");
        });
        button.addEventListener("mouseover", () => {
          mouseCursor.classList.add("buttonLinks-grow");
        });
      });

      // Pictures effect
      pictures.forEach((picture) => {
        picture.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("buttonLinks-grow");
          mouseCursor.style.backgroundColor = "transparent";
          cursorIcon.style.display = "none";

          if (!darkroom) {
            mouseCursor.style.borderColor = "#646464";
          } else {
            mouseCursor.style.borderColor = "white";
          }
        });
        picture.addEventListener("mouseover", () => {
          mouseCursor.classList.add("buttonLinks-grow");
          mouseCursor.style.borderColor = "white";
          mouseCursor.style.backgroundColor = "rgba(0, 0, 0, 0.50)";
          cursorIcon.style.display = "block";
        });
      });

      // Selected picture effect
      if (pictureSelected !== null) {
        pictureSelected.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("buttonLinks-grow");
          mouseCursor.classList.remove("inverte");
          mouseCursor.style.backgroundColor = "transparent";
          cursorIcon.style.display = "none";
        });

        pictureSelected.addEventListener("mouseover", () => {
          mouseCursor.classList.remove("buttonLinks-grow");
          mouseCursor.classList.add("inverte");
          cursorIcon.style.display = "none";
        });
      }
    }
  }, [location, darkroom]);

  return (
    <>
      {!isMobile ? (
        <div className="cursor">
          <Eye />
        </div>
      ) : null}
    </>
  );
}
