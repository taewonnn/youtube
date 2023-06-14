import {BsSearchHeartFill, BsYoutube} from "react-icons/bs";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function SearchHeader() {

  const { keyword } = useParams();

  const [text, setText] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  // keyword가 변할 때 마다 !
  useEffect(() => {
    setText(keyword || '');
  }, [keyword])

  return (
    <header>
      <Link to='/'>
        <BsYoutube/>
        <h1>YouTube</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearchHeartFill/>
        </button>
      </form>
    </header>
  )
}

export default SearchHeader;
