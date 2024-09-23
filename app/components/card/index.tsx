import React from "react";
import "./card.scss";

export const Card = () => {
  return (
    <div className="card">
      <div className="card__header">Card Title</div>
      <div className="card__content">
        <p>This is a simple card example without using SCSS BEM.</p>
      </div>
      <div className="card__footer">Footer Text</div>
    </div>
  );
};
