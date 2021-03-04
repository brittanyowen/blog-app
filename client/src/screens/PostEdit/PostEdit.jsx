import { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, updatePost } from "../../services/posts";
import Error from "../../asset/404.png"

const PostEdit = (props) => {
  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
    imgURL: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }
  //if no valid pic url,show404error
  function defaultSrc(e) {
    e.target.src = Error
  }

  return (
    <Layout user={props.user}>
      <div className="post-edit">
        <div className="image-container">

          <img className="edit-post-image" src={post.imgURL} alt={post.title} onError={defaultSrc} />
          <label htmlFor="edit-input-image-link">Image Link</label>

          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={post.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <label htmlFor="input-author">Author: </label>
          <br/>
          <input
            className="input-author"
            placeholder="author"
            value={post.author}
            name="author"
            required
            autoFocus
            onChange={handleChange}
          />
          <br/>
          <label htmlFor="input-title">Title: </label>
          <br/>
          <input
            className="input-title"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            onChange={handleChange}
          />
          <br/>
          <label htmlFor="textarea-content">Content: </label>
          <br/>
          <textarea
            className="textarea-content"
            rows={10}
            cols={78}
            placeholder="content"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          <br/>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
