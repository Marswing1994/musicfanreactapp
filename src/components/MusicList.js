import SongCard from "./SongCard";
import songs from "./musicArray.js";

const MusicList = () => {
    return (
        <div className="songs_container flex bg-[#909485]">
            <SongCard songs={songs}/>
        </div>
    );
};

export default MusicList;