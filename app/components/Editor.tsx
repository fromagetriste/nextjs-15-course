import TopNav from "./TopNav";

type EditorProps = {
  isViewer: boolean;
  handleToggleViewer: () => void;
  text: string;
  setText: (value: string) => void;
  handleToggleMenu: (value: boolean) => void;
};

export default function Editor(props: EditorProps) {
  const { isViewer, handleToggleViewer, text, setText } = props;
  return (
    <section className="notes-container">
      <TopNav {...props} />
      <textarea
        value={text}
        placeholder="Type your new note ..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
    </section>
  );
}
