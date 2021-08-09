import React from "react";
import SearchButtons from "../components/SearchButtons";
import ItemList from "../components/ItemList";
import SearchBar from "../components/Searchbar";
import { useGlobalContext } from "../contexts/AppContext";
import Loading from "../components/Loading";
const Home = () => {
  const { loadFunction, loaded } = useGlobalContext();

  return (
    <main
      onLoad={loadFunction}
      className="bg-secondary mt-5 pb-5 text-capitalize height"
    >
      <SearchBar></SearchBar>
      <SearchButtons></SearchButtons>
      {loaded ? <ItemList /> : <Loading />}
    </main>
  );
};

export default Home;
