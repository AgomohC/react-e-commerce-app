import React from "react";
import { useGlobalContext } from "../contexts/AppContext";

const Searchbar = () => {
  const { searchValue, searchbarFunction } = useGlobalContext();

  return (
    <section className="container">
      <div className="row justify-content-center d-flex">
        <form className="col-12">
          <div className="form-group mx-auto col-12 col-md-8 col-lg-6 bg-light mt-5 p-3  shadow rounded d-flex justify-content-center">
            <label
              htmlFor="searchInput"
              className="text-secondary text-capitalize  my-auto col-2 pr-2 mr-3 mr-md-auto"
            >
              search
            </label>
            <input
              type="text"
              id="searchInput"
              value={searchValue}
              onChange={(e) => searchbarFunction(e)}
              className="form-control text-light bg-secondary mx-auto width-400 my-auto pl-2 col-10"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Searchbar;
