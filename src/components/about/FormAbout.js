import React from "react";

export default function FormAbout() {
  return (
    <form className="my-4 w-100">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom01">First name</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="First name"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom02">Last name</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Last name"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom01">Email</label>
          <input
            type="email"
            className="form-control"
            id="validationCustom01"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom02">Degree</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom03">City</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom03">State</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
        </div>
      </div>
      <div className="form-group my-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <button className="btn btn-info" type="submit">
        Apply
      </button>
    </form>
  );
}
