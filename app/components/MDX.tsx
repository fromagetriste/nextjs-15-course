import Markdown from "markdown-to-jsx";
import TopNav from "./TopNav";

type MDXProps = {
  isViewer: boolean;
};

export default function MDX({ isViewer }: MDXProps) {
  const md = `
  # This is a header 1
  ## This is a header 2

  Hello World
  [click me] (https://www.google.fr/)`;
  return (
    <section className="mdx-container">
      <TopNav isViewer={isViewer} />
      <article>
        <Markdown>{md}</Markdown>
      </article>
    </section>
  );
}
