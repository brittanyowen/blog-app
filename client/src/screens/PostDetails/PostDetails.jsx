import React, { useState, useEffect } from "react";
import "./PostDetails.css";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";
import { useParams, Link } from "react-router-dom";
const PostDetails = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  const handleClick = () => {
    deletePost(post._id);
    setIsDeleted(true);
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      {!isDeleted ? (
        <div className="post-detail">
          <div className="detail-container">
            <div className="title">{post.title}</div>
            <div className="author">Post by: {post.author}</div>
            <img
              className="post-detail-image"
              src={post.imgURL}
              alt={post.title}
            />
            <div className="content">{post.content}</div>
          </div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/posts/${post._id}/edit`}>
                Edit
              </Link>
            </button>
            <button className="delete-button" onClick={() => handleClick()}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Your post has been deleted!</h2>
          <button className="take-me-home">
            <Link to="/">Take me home</Link>
          </button>
        </div>
      )}
    </Layout>
  );
};

export default PostDetails;
