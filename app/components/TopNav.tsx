"use client";

import { useState } from "react";

interface TopNavProps {
  isViewer: boolean;
  handleToggleViewer: () => void;
  handleToggleMenu: (value: boolean) => void;
}

export default function TopNav(props: TopNavProps) {
  const { isViewer, handleToggleViewer, handleToggleMenu } = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      handleToggleMenu(newState); // Send to parent
      return newState;
    });
  };

  return (
    <>
      <div className="notes-btn">
        <button onClick={toggleMenu} className="card-button-primary menu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <button>
          <h6>Save</h6>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button onClick={handleToggleViewer} className="card-button-secondary">
          {isViewer ? (
            <>
              {" "}
              <h6>Editor</h6>
              <i className="fa-solid fa-pencil"></i>
            </>
          ) : (
            <>
              {" "}
              <h6>Viewer</h6>
              <i className="fa-solid fa-check-double"></i>
            </>
          )}
        </button>
      </div>
      <div className="full-line"></div>
    </>
  );
}
