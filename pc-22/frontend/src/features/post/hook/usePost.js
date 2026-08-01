import { useContext } from 'react';
import { PostContext } from '../post.context';
import { getFeed } from '../services/post.api';

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, post, feed, setLoading, setPost, setFeed } = context;

  const handleGetFeed = async () => {
    try {
      setLoading(true);
      const data = await getFeed();
      setFeed(data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, post, feed, handleGetFeed };
};

