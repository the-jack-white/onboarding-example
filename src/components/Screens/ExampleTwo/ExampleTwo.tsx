import { Content } from "../../../vite-env";

type ExampleTwoProps = {
  content: Content;
};

export const ExampleTwo = ({ content }: ExampleTwoProps) => {
  return (
    <div className="example-container">
      <h1 className="example-heading">{content.headingText}</h1>
    </div>
  );
};
