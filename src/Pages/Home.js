import React from "react";
import SearchButtons from "../components/SearchButtons";
import ItemList from "../components/ItemList";
import SearchBar from "../components/Searchbar";
const Home = () => {
  return (
    <main className="bg-secondary text-capitalize height">
      <SearchBar></SearchBar>
      <SearchButtons></SearchButtons>
      <ItemList></ItemList>
    </main>
  );
};

export default Home;
