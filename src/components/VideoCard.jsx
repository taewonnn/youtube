import {formatAgo} from "../util/datae";
import {useNavigate} from "react-router-dom";

function VideoCard({ video }) {

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet

  // useNavigate
  const navigate = useNavigate();

  return (
    <li onClick={() => {
      console.log(video.id)
      navigate(`videos/watch/${video.id}`, {state: {video:video}})
    }}>
      <img
        className='w-full'
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
