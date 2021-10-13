import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [playlists, setPlaylists] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v1/playlists");

    const playlists = await data.json();
    console.log(playlists);
    setPlaylists(playlists.data);
  };

  return (
    <div>
      {playlists.map((playlist) => (
        <h1 key={playlist.id}>
          <Link to={`/about/${playlist.id}`}>{playlist.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default About;
