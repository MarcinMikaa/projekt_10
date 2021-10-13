import React, { useState, useEffect } from "react";

function Playlist({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [playlist, setPlaylist] = useState({
    data: {},
    description: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.com/v1/playlists/${match.params.id}`);
    const playlist = await fetchItem.json();
    setPlaylist(playlist);

    console.log(playlist);
  };

  return (
    <div>
      <h1>{playlist.data.name}</h1>
      <h1>{playlist.data.added}</h1>
    </div>
  );
}

export default Playlist;
