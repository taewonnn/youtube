import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

function ChannelInfo({id, name}) {

  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: url } = useQuery(['channel', id], () =>
    youtube.ChannelImageUrl(id), {staleTime: 1000 * 60 * 5}
  );

  return (
    <div className='flex my-4 mb-8 items-center'>
      { url && <img className='w-10 h-10 rounded-full' src={url} alt={name} /> }
      <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  )
}

export default ChannelInfo;
