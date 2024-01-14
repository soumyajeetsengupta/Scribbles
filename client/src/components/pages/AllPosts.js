import Post from "./Post";
import { useEffect, useState } from "react";

export default function AllPosts() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const response = fetch('https://scribble-api.onrender.com/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {posts.length > 0  && posts.map(post => (
                <Post {...post}/>
            ))}
        </>
    );
}