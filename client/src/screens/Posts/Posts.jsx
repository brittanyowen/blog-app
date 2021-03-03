import PostCards from "../../components/PostCards/PostCards";
import Layout from "../../components/shared/Layout/Layout";
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
