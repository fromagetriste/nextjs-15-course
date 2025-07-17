import TopNav from "./TopNav";

type MDXProps = {
  isViewer: boolean;
};

export default function MDX({ isViewer }: MDXProps) {
  return (
    <section className="mdx-container">
      <TopNav isViewer={isViewer} />
    </section>
  );
}
