import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Bubble from "../Bubble/Bubble";
import "./BubbleContainer.scss";

export default function BubbleContainer({ titles }) {
  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const children = titles.map((data, i) => {
    return <Bubble data={data} className="bubble" key={i} />;
  });

  return (
    <BubbleUI options={options} className="bubble-container">
      {children}
    </BubbleUI>
  );
}
