"use client";

import { useState } from "react";
import Editor from "../components/Editor";
import MDX from "../components/MDX";
import SideNav from "../components/SideNav";

export default function NotesPage() {
  const [isViewer, setIsViewer] = useState<boolean>(true);
  const [text, setText] = useState<string>("");

  const handleToggleViewer = () => {
    setIsViewer(!isViewer);
  };

  return (
    <main id="notes">
      <SideNav />
      {!isViewer && (
        <Editor isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
      )}
      {isViewer && (
        <MDX isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
      )}
    </main>
  );
}
