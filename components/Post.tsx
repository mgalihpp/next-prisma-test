"use client";

import PostCard from "./PostCard";
import React from "react";

type Posts = {
  id: string;
  title: string;
  body: string;
  User: {
    name: string;
  };
  _count: {
    comment: number;
  };
  createdAt: string;
};

const Post = () => {
  const [posts, setPosts] = React.useState<Posts[]>([]);

  React.useEffect(() => {
    fetch("/api/posts", {
      method: "GET",
    })
      .then((respone) => respone.json())
      .then((data) => setPosts(data.posts));
  }, []);

  console.log(posts);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard
            title={post.title}
            body={post.body}
            username={post.User.name}
            createdAt={post.createdAt}
            replies={post._count.comment}
          />
        </div>
      ))}
    </>
  );
};

export default Post;
