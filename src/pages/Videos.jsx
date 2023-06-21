import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import Youtube, {search} from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";
import {useYoutubeApi} from "../context/YoutubeApiContext";

function Videos () {

  // parameter 사용
  const { keyword } = useParams();

  // context

  const { youtube } = useYoutubeApi();

  // react-query
  // 형태 : const {isLoading, error, data: videos} = useQuery(캐시 key , 어떻게 가지고 오는지 함수로 전달 );
  const {isLoading, error, data: videos} = useQuery(
    ['videos', keyword],() => youtube.search(keyword)
  );


  return (
    <>
      {/* keyword가 있다면 keyword를 보여주고, 없다면 Hot Trend */}
      <div>Videos {keyword ? `${keyword}` : 'Hot Trend'}
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong</p>}
        {videos && <ul className='grid grid-cols-1 sm:grid-cols-2 lg: grid-cols-3 xl: grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-6'>
          { videos.map((video) => <VideoCard key={video.id} video={video}/>) }
        </ul>}
      </div>
    </>
  )
}

export default Videos;

