import Markdown from "markdown-to-jsx";
import TopNav from "./TopNav";

type MDXProps = {
  isViewer: boolean;
  handleToggleViewer: () => void;
  text: string;
  handleToggleMenu: (value: boolean) => void;
};

export default function MDX({ isViewer, handleToggleViewer, text }: MDXProps) {
  return (
    <section className="mdx-container">
      <TopNav isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
      <article>
        <Markdown>{text.trim()}</Markdown>
      </article>
    </section>
  );
}
