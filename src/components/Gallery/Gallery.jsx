import "./Gallery.scss";
import Prev from "../../assets/icons/chevron-left.svg";
import Next from "../../assets/icons/chevron-right.svg";

export default function Gallery({
  children,
  galleryArray,
  activeIndex,
  setActiveIndex,
  setSecondaryIndex,
  type,
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
    <>
      <button
        className={`gallery__direction gallery__direction--prev gallery__direction--${type} gallery__direction--${type}-prev`}
        onClick={() => {
          moveGallery("prev");
        }}
      >
        <img
          className={`gallery__icon gallery__icon--${type}`}
          src={Prev}
          alt="Chevron left icon"
        />
      </button>

      {children}

      <div className={`gallery__buttons gallery__buttons--${type}`}>
        {galleryArray.map((_item, index) => {
          return (
            <button
              key={index}
              className={`gallery__index gallery__index--${type} ${
                index === activeIndex ? "gallery__index--active" : ""
              }`}
              onClick={() => {
                moveGallery(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className={`gallery__direction gallery__direction--next gallery__direction--${type} gallery__direction--${type}-next`}
        onClick={() => {
          moveGallery("next");
        }}
      >
        <img
          className={`gallery__icon gallery__icon--${type}`}
          src={Next}
          alt="Chevron right icon"
        />
      </button>
    </>
  );
}
