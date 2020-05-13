import { MusicListData } from "../modules/defaultMusicListData";

export const GET_MOVIE_INFO = "GET_MOVIE_INFO"; // getMovieInfo();

const storageMusicList = localStorage.getItem("localPlayList")
    ? JSON.parse(localStorage.getItem("localPlayList"))
    : MusicListData[0].base.list;

const initialState = {
    musicList: storageMusicList,
    nowPlayingMusic: initialState.musicList[0],
    cover: initialState.musicList[0].bigJacket,
    isPlaying: false,
    url: "",
};
