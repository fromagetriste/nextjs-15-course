import TopNav from "./TopNav";

type EditorProps = {
  isViewer: boolean;
};

export default function Editor({ isViewer }: EditorProps) {
  return (
    <section className="notes-container">
      <TopNav isViewer={isViewer} />
      <textarea placeholder="The mitochodria is the powerhouse of the cell"></textarea>
    </section>
  );
}
