import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props._id}`}>
        <img
          className="post-card-image"
          src={props.imgURL}
          alt="blog-decoration"
        />
        <div>View</div>
      </Link>
    </div>
  );
};

export default PostCard;
