import PostCard from "../PostCard/PostCard";
import { getPosts } from "../../services/posts";
import { useEffect, useState } from "react";
function PostCards(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetch() {
      const posts = await getPosts();
      setPosts(posts);
    }
    fetch();
  }, []);
  const CARDS = posts
    .reverse()
    .map((post) => (
      <PostCard
        _id={post._id}
        author={post.author}
        content={post.content}
        imgURL={post.imgURL}
        key={post._id}
      />
    ));
  return (
    <div className="post-cards">
      <div className="latest">LATEST</div>
      <div className="cards">{CARDS}</div>
    </div>
  );
}
export default PostCards;
