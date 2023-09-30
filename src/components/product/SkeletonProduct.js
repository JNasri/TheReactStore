import React from "react";

export default function SkeletonProduct() {
  return (
    <div className="skeleton-card">
      <div
        className="card rounded"
        aria-hidden="true"
        style={{ height: "25rem" }}
      >
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-3"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
            <span className="placeholder col-6"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
