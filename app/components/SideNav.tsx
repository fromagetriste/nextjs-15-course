export default function SideNav() {
  const notes = ["hello", "world"];
  const showNav: boolean = true;
  return (
    <section className={"nav " + (showNav ? "" : "hidden-nav")}>
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
              <button key={index} className="card-button-secondary">
                <p>{note}</p>
                <small>DATETIME</small>
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
