import React, { useEffect, useState } from "react";
import Images from "./components/images";
import "./App.scss";

function App() {
  const [images, setImages] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/albums/1/photos";
  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="App">
      <Images data={images} />
    </div>
  );
}

export default App;
