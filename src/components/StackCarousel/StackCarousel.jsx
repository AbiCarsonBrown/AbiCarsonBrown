import { useEffect, useState } from "react";
import "./StackCarousel.scss";

export default function StackCarousel() {
  const stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <div className="carousel">
      {stack.map((item, index) => {
        return (
          <div key={index} className="carousel__item">
            item {item}
          </div>
        );
      })}
    </div>
  );
}
