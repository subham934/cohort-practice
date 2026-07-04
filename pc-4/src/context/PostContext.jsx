import React, { createContext } from 'react';

export const PostDataContext = createContext();
const PostContext = (props) => {
    const data = [
    {
      id: 1,
      name: "Subham Dhar",
      username: "subhamd",
      post: "Learning React Context is actually fun once you understand state flow!",
      likes: 124,
      comments: 12,
    },
    {
      id: 2,
      name: "Jyoti Sharma",
      username: "jyoti.dev",
      post: "Built my first full-stack app today 🚀 Feeling proud!",
      likes: 342,
      comments: 28,
    },
    {
      id: 3,
      name: "Aman Verma",
      username: "codewithaman",
      post: "Debugging for 3 hours just to find a missing semicolon 🙂",
      likes: 210,
      comments: 19,
    },
    {
      id: 4,
      name: "Riya Sen",
      username: "riya.designs",
      post: "UI design is not decoration, it’s communication.",
      likes: 489,
      comments: 34,
    },
  ];

  return (
    <div>
      <PostDataContext.Provider value={data}>
        {props.children}
      </PostDataContext.Provider>
    </div>
  );
};

export default PostContext;

