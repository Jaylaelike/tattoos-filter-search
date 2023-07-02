import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattoItem";
import tattoos from "./components/tattoos";
import TattooPost from "./components/TattooPost";

import "./components/TattooPost.css";
import { useState } from "react";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedTattoo(null);
  }

  // const filteredTattoo = tattoos.filter((tattoo) => {
  //   return tattoo.title.includes(searchText);
  // });

  const tattoElemnts = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return (
        <TattooItem
          key={index}
          tattoo={tattoo}
          onTattooClick={onTattooOpenClick}
        />
      );
    });

  let tattooPost = null;

  if (!!selectedTattoo) {
    tattooPost = (
      <TattooPost Post tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
    );
  }
  return (
    <div className="app">
      <AppHeader />

      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{TattooItem}</div>
        </div>
      </section>

      <div className="app-grid">{tattoElemnts}</div>
      {tattooPost}
    </div>
  );
}

export default App;
