import React from 'react';
import Counter from './components/Counter';
import Theme from './components/Theme';
import { Provider, useSelector } from 'react-redux';
import { store } from './store.js';

const AppContent = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`redux ${theme}`}>
      <Counter />
      <Theme />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
