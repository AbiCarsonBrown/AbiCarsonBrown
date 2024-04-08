import "./GalleryButtons.scss";
import Prev from "../../assets/icons/chevron-left.svg";
import Next from "../../assets/icons/chevron-right.svg";

export default function GalleryButtons({
  galleryArray,
  activeIndex,
  setActiveIndex,
  setSecondaryIndex,
}) {
  const count = galleryArray.length;

  const moveGallery = (action) => {
    setSecondaryIndex && setSecondaryIndex(0);
    if (action === "prev") {
      if (activeIndex === 0) {
        setActiveIndex(count - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    } else if (action === "next") {
      if (activeIndex === count - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    } else {
      setActiveIndex(action);
    }
  };

  return (
    <div className="buttons">
      <button
        className="buttons__direction buttons__direction--prev"
        onClick={() => {
          moveGallery("prev");
        }}
      >
        <img className="buttons__icon" src={Prev} alt="Chevron left icon" />
      </button>

      {galleryArray.map((_item, index) => {
        return (
          <button
            key={index}
            className={`buttons__index ${
              index === activeIndex ? "buttons__index--active" : ""
            }`}
            onClick={() => {
              moveGallery(index);
            }}
          ></button>
        );
      })}

      <button
        className="buttons__direction buttons__direction--next"
        onClick={() => {
          moveGallery("next");
        }}
      >
        <img className="buttons__icon" src={Next} alt="Chevron right icon" />
      </button>
    </div>
  );
}
