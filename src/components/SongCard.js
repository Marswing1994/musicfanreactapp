import { useState } from "react";

const extraLength = {
    position: 'fixed',
    height: 'screen',
    width: 'screen',
    top: '0',
    left: '0',
};

const SongCard = ({songs}) => {
    
    const [currentAudio, setCurrentAudio] = useState(songs[0] || null);
    const [showModal, setShowModal] = useState(false);

    const handleAudioChange = (index) => {
        if (songs[index]) {
            setCurrentAudio(songs[index]);
            setShowModal(true);
        } else {
            console.error("Invalid index or song data");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="song-card flex flex-auto flex-row flex-wrap w-screen p-10 content-center">
            {songs.map((song, index) => (
                <div key={index} className="border-solid border-2 border-[#fda037] hover:border-white content-center w-1/5 mx-8 my-2 dark:bg-[#15162e] rounded drop-shadow-lg text-white">
                    <img
                        src={song.img}
                        alt={song.title}
                        style={{
                            padding: "10px 20px",
                            textAlign: "center",
                            width: "200px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    />
                    <h2 className="font-gabarito text-2xl px-2">{song.title}</h2>
                    <p className="italic px-2">{song.album}</p>
                    <p className="text-xs py-2">{song.release}</p>

                    <button className="dark:bg-[#fda037] text-white p-2 rounded m-2 drop-shadow-md dark:hover:text-black text-xl" onClick={() => handleAudioChange(index)}>Play Sample</button>
                </div>
            ))}


            {showModal && currentAudio && (
                <div className="modal-overlay w-screen h-screen z-50 bg-slate-500/80" style={extraLength} onClick={handleCloseModal}>
                    <>
                        <div
                            className="justify-center content-center/ items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div 
                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-150 bg-white outline-none focus:outline-none"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            {currentAudio.title}
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={handleCloseModal}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed italic">
                                            {currentAudio.album}
                                        </p>
                                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                            <img src="../images/other/equalizer.gif" alt="Now Playing..." className="mx-auto w-full h-60"/>
                                        </p>
                                        <audio src={currentAudio.clip} className="mx-auto" controls autoPlay />
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            {currentAudio.tag}
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="dark:bg-[#15162e] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleCloseModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                </div>     
            )}
        </div>
    );
};

export default SongCard;