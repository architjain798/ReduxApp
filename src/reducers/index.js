import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "ABC", duration: "3:32" },
    { title: "XYZ", duration: "2:12" },
    { title: "PQR", duration: "3:51" },
    { title: "UVW", duration: "3:34" }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.payloads === "SONG_SELECTED") {
    return action.payloads;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
