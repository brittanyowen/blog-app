import PostCards from "../../components/PostCards/PostCards";
import Layout from "../../components/shared/Layout/Layout";
import "./Posts.css";
function Posts() {
  return (
    <Layout>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  );
}

export default Posts;
