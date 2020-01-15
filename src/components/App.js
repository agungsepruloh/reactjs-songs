import React from "react";
import { selectSong } from "../actions";
import SongList from "./SongList";

const App = () => {
  return (
    <div className="App">
      <SongList />
    </div>
  );
};

export default App;
