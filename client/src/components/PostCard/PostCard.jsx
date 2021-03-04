import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = (props) => {
  return (
    <Link className="card" to={`/posts/${props._id}`}>
      <div className="post-card">
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
        <img
          className="post-card-image"
          src={props.imgURL}
          alt="blog-decoration"
        />
        <div>View</div>
      </div>
    </Link>
  );
};

export default PostCard;
