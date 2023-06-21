function VideoCard ({ video }) {

  const {title, thumbnails} = video.snippet

  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
    </li>
  )
}

export default VideoCard;
