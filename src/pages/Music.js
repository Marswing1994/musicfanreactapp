import React from "react";
import Footer from "../components/Footer";
import MusicList from "../components/MusicList";

function Music() {
  return (
    <div className="App bg-[#909485]">
      <h1 className="text-5xl pt-5 text-white font-gabarito"><a href="https://open.spotify.com/playlist/1HfnwrS5osUMTNdV4SKvCO" alt="Billie Eilish top 20 playlist" className="hover:drop-shadow-xl"><img src="../images/other/Spotify_Full_Logo_RGB_White.png" className="h-20 mx-auto pb-2" /></a> Billie Eilish Top Streams</h1>
      <MusicList />
      <Footer />
    </div>
  );
}

export default Music;