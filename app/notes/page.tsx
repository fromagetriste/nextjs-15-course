"use client";

import { useState } from "react";
import Editor from "../components/Editor";
import MDX from "../components/MDX";
import SideNav from "../components/SideNav";

export default function NotesPage() {
  const [isViewer, setIsViewer] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleToggleViewer = () => {
    setIsViewer(!isViewer);
  };

  const handleToggleMenu = () => {
    setShowNav(!showNav)
  }

  return (
    <main id="notes">
      <SideNav showNav={showNav} setShowNav={setShowNav} />
      {!isViewer && (
        <Editor
          isViewer={isViewer}
          handleToggleViewer={handleToggleViewer}
          text={text}
          setText={setText}
          handleToggleMenu={handleToggleMenu}
        />
      )}
      {isViewer && (
        <MDX
          text={text}
          isViewer={isViewer}
          handleToggleViewer={handleToggleViewer}
          handleToggleMenu={handleToggleMenu}
        />
      )}
    </main>
  );
}
