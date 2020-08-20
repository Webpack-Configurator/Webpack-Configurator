import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// should grab the App component and attach to the index.html
render(<App />,
  document.getElementById('root'),
);