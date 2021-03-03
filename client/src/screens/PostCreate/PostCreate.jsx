import React, { useState } from 'react'
import './PostCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = (props) => {

    const [post, setPost] = useState({
            author: '',
            title: '',
            imgURL: '',
            content: ''
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost({
                ...post,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createPost(post)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/posts`} />
    }
    return (
        <Layout user={props.user}>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-author"
                    placeholder='Author'
                    value={post.author}
                    name='author'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    className="input-title"
                    placeholder='Title'
                    value={post.title}
                    name='title'
                    required
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-content"
                    rows={10}
                    placeholder='Content'
                    value={post.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={post.imgURL}
                    name='imgURL'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default PostCreate