import TopNav from "./TopNav";

type EditorProps = {
  isViewer: boolean;
  handleToggleViewer: () => void;
};

export default function Editor(props: EditorProps) {
  const { isViewer, handleToggleViewer } = props;
  return (
    <section className="notes-container">
      <TopNav {...props} />
      <textarea placeholder="The mitochodria is the powerhouse of the cell"></textarea>
    </section>
  );
}
