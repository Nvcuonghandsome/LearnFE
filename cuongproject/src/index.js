import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Blog from './Blog'
import BlogDetail from './BlogDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/detail/id' element={<BlogDetail />} />
        </Routes>
      </App>
    </Router>

  </React.StrictMode>
);

reportWebVitals();
