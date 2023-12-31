import { formatAgo } from "../util/datae";
import { useNavigate } from "react-router-dom";

function VideoCard({video, type}) {

  const {title, thumbnails, channelTitle, publishedAt} = video.snippet

  // useNavigate
  const navigate = useNavigate();

  const isList = type === 'list'

  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
      console.log(video)
      // '/'를 붙이면 절대경로 ->
      // './'을 붙이면 상대경로 -> 현 위치로부터의 경로
      // /video/watch =>  videos

      navigate(`/videos/watch/${video.id}`, {state: {video}})
    }}>
      <img
        className={isList ? 'w-60 mr-3' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}/>
      <div>
        <p className='font-bold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  )
}

export default VideoCard;
