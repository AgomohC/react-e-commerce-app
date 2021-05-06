import React from "react";
import SearchButtons from "../components/SearchButtons";
import Itemlist from "../components/Itemlist";
import SearchBar from "../components/Searchbar";
const Home = () => {
  return (
    <main className="bg-secondary text-capitalize height">
      <SearchBar></SearchBar>
      <SearchButtons></SearchButtons>
      <Itemlist></Itemlist>
    </main>
  );
};

export default Home;
