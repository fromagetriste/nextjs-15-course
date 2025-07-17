export default function SideNav() {
  const notes = ["hello", "world"];
  return (
    <section className="nav ">
      <h1 className="text-gradient">MD Notes</h1>

      <h6>Easy Breezy Notes</h6>
      <div className="full-line"></div>
      <button>
        <h6>New Note</h6>
        <i className="fa-solid fa-plus"></i>
        <div className="notes-list"></div>
      </button>
    </section>
  );
}
