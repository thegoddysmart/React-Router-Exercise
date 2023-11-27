import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "This is the first blog post" },
    { id: 2, title: "Blog Post 2", content: "This is the second blog post" },
    { id: 3, title: "Blog Post 3", content: "This is the third blog post" },
    { id: 4, title: "Blog Post 4", content: "This is the fourth blog post" },
    { id: 5, title: "Blog Post 5", content: "This is the fifth blog post" },
    { id: 6, title: "Blog Post 6", content: "This is the sixth blog post" },
    { id: 7, title: "Blog Post 7", content: "This is the seventh blog post" },
    { id: 8, title: "Blog Post 8", content: "This is the eighth blog post" },
    { id: 9, title: "Blog Post 9", content: "This is the ninth blog post" },
    { id: 10, title: "Blog Post 10", content: "This is the tenth blog post" },
];

function Blog() {
    const { postId } = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(postId, 10));

    if (!post) {
        return <div>Blog Post not found!</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default Blog;