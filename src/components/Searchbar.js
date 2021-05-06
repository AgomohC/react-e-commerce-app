import React from "react";

const Searchbar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center d-flex">
        <form className="col-12">
          <div className="form-group pt-5">
            <label htmlFor="searchInput"></label>
            <input
              type="text"
              id="searchInput"
              className="form-control mx-auto width-400"
            />
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-primary mx-auto mt-2 col-1 text-capitalize"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
