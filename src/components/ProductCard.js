import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ProductCard = (props) => {
  const { image } = props;

  return (
    <div className="col-6">
      <div
        className="card mb-3"
        style={{
          maxWidth: "640px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={image}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
