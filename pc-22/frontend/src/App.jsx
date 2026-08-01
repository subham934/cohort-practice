import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './app.routes';
import './features/shared/global.scss';
import { AuthProvider } from './features/auth/auth.context';
import { PostContextProvider } from './features/post/post.context';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <PostContextProvider>
          <RouterProvider router={router} />
        </PostContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
