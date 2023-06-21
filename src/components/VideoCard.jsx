import {formatAgo} from "../util/datae";

function VideoCard ({ video }) {

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet

  return (
    <li>
      <img
        className='w-full'
        src={thumbnails.medium.url}
        alt={title} />
      <div>
        <p className='font-bold my-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  )
}

export default VideoCard;
