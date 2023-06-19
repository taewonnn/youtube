import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import {search} from "../api/youtube";

function Videos () {

  // parameter 사용
  const { keyword } = useParams();

  // react-query
  // 형태 : const {isLoading, error, data: videos} = useQuery(캐시 key , 어떻게 가지고 오는지 함수로 전달 );
  const {isLoading, error, data: videos} = useQuery(
    ['videos', keyword],() => search(keyword)
  );


  return (
    <>
      <div>Videos
        {/* keyword가 있다면 keyword를 보여주고, 없다면 Hot Trend */}
        {keyword ? `${keyword}` : 'Hot Trend'}
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong</p>}
        {videos && <ul>
          { videos.map((video) => <VideoCard key={video.id} video={video}/>) }
        </ul>}
      </div>
    </>
  )
}

export default Videos;

