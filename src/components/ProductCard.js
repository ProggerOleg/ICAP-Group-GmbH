import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { image, title, text, id } = props;
  const productUrl = `/project/${id}`;

  return (
    <div className="col-6">
      <div
        className="card mb-3"
        style={{
          maxWidth: "640px",
        }}
      >
        <Link to={productUrl}>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={image}
                className="card_image img-fluid rounded-start h-100"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>{title}</strong>
                </h5>
                <p className="card-text">{text}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
