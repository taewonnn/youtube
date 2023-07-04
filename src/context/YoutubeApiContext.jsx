import {createContext, useContext} from "react";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";
import YoutubeClient from "../api/youtubeClient";
import FakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

// mock data 사용
// const client = new FakeYoutubeClient();

// 실제 서버 사용
const client = new YoutubeClient();

const youtube = new Youtube(client);


// 데이터 1개(youtube 인스턴스)를 전달해주는 우산
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
