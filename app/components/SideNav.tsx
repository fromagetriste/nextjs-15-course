"use client";
import { useEffect, useRef } from "react";

type SideNavProps = {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
};

export default function SideNav({ showNav, setShowNav }: SideNavProps) {
  const notes = ["hello", "world", "hello", "world"];

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log(ref);
      if (ref.current && ref.current.contains(event.target as Node)) {
        setShowNav(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    // cleanup for when we unmount the component :
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <section ref={ref} className={"nav " + (showNav ? "" : "hidden-nav")}>
      <h1 className="text-gradient">MD Notes</h1>

      <h6>Easy Breezy Notes</h6>
      <div className="full-line"></div>
      <button>
        <h6>New Note</h6>
        <i className="fa-solid fa-plus"></i>{" "}
      </button>
      <div className="notes-list">
        {notes.length == 0 ? (
          <p>You have 0 note</p>
        ) : (
          notes.map((note, index) => {
            return (
              <button key={index} className="card-button-secondary list-button">
                <p>{note}</p>
                <small>DATETIME</small>
                <div>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
                DELETE BUTTON ICON
              </button>
            );
          })
        )}
      </div>
      <div className="full-line"></div>
      <button>
        <h6>Logout</h6>
        <i className="fa-solid fa-right-from-bracket"></i>
      </button>
    </section>
  );
}
