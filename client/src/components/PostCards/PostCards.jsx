import PostCard from "../PostCard/PostCard";
import { getPosts } from "../../services/posts";
import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { AZauthor, ZAauthor, AZtitle, ZAtitle } from "../../utils/sort";
import Sort from "../shared/Sort/Sort";
import "./PostCards.css";
function PostCards(props) {
  const [posts, setPosts] = useState([]);
  const [queriedPosts, setQueriedPosts] = useState([]);
  const [sortType, setSortType] = useState([]);
  useEffect(() => {
    async function fetch() {
      const posts = await getPosts();
      setPosts(posts);
      setQueriedPosts(posts);
    }
    fetch();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "author-ascending":
        setQueriedPosts(AZauthor(queriedPosts));
        break;
      case "author-descending":
        setQueriedPosts(ZAauthor(queriedPosts));
        break;
      case "title-ascending":
        setQueriedPosts(AZtitle(queriedPosts));
        break;
      case "title-descending":
        setQueriedPosts(ZAtitle(queriedPosts));
        break;
      default:
        break;
    }
  };
  const handleSearch = (event) => {
    const newQueriedPosts = posts.filter((post) =>
      post.author.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedPosts(newQueriedPosts, () => handleSort(sortType));
  };
  const handleSubmit = (event) => event.preventDefault();
  const CARDS = queriedPosts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <PostCard
          title={post.title}
          _id={post._id}
          author={post.author}
          content={post.content}
          imgURL={post.imgURL}
          key={post._id}
        />
      ) : null
    );
  return (
    <div className="post-cards">
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="feed">Feed</div>
      <div className="cards">{CARDS}</div>
    </div>
  );
}
export default PostCards;
