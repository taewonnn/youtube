import {useParams} from "react-router-dom";

function Videos () {

  const { keyword } = useParams();

  return (
    <div>
      Videos
      {/* keyword가 있다면 keyword를 보여주고, 없다면 Hot Trend */}
      {keyword ? `${keyword}` : 'Hot Trend'}
    </div>
  )
}

export default Videos;

