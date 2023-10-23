import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((postResponse) => {
        const postsData = postResponse.data;

        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((usersResponse) => {
            const usersData = usersResponse.data;
            const postsWithUserNames = postsData.map((post) => {
              const user = usersData.find((user) => user.id === post.userId);
              const userName = user ? user.name : "Unknown User";
              return {
                title: post.title,
                body: post.body,
                userName,
              };
            });

            setPosts(postsWithUserNames);
          });
      });
  }, []);

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
