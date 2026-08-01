import React, { useEffect } from 'react';
import '../style/feed.scss';
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <div>
        <h1>Feed is Loading...</h1>
      </div>
    );
  }

  console.log(feed)

  return (
    <div>
      <main className="feed-page">
        <div className="feed">
          <div className="posts">
            {/* posts will render here */}
            {
            feed.map(post => {
                return <Post user={post.user} post={post} />
            })
          }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
