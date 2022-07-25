import './index.scss';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Router basename="/trempy">
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );