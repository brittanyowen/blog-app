import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = (props) => {
  return (
    <Link className="card" to={`/posts/${props._id}`}>
      <div className="post-card">
        <h2> {props.title}</h2>
        <h4>Post By: {props.author}</h4>
        <h5>Excerpt:{props.content.slice(0, 30)}...</h5>
        <div>View More</div>
      </div>
    </Link>
  );
};

export default PostCard;
