import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../contexts/AppContext";

const Searchbar = () => {
  const { searchValue, searchbarFunction } = useGlobalContext();

  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <section className="container">
      <div className="row justify-content-center d-flex">
        <form className="col-12">
          <div className="form-group mx-auto col-12 col-md-8 col-lg-6 bg-light mt-5 p-3 shadow rounded d-flex justify-content-center">
            <input
              ref={refContainer}
              type="text"
              id="searchInput"
              value={searchValue}
              onChange={(e) => searchbarFunction(e)}
              className="form-control text-light bg-secondary mx-auto width-400 my-auto col-12"
              placeholder="search by title"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Searchbar;
