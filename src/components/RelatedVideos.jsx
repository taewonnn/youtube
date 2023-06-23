import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

function RelatedVideos ({ id }) {

  const { youtube } = useYoutubeApi();
  const { error, isLoading, videos } = useQuery(['related', id], () => youtube.relatedVideos(id));

  return (
    <div>
      {id}
    </div>
  )
}

export default RelatedVideos;
