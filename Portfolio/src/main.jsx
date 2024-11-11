import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'Portfolio/src/index.css';
import App from 'Portfolio/src/App.jsx';

import "@fontsource/roboto"
import "@fontsource/outfit"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
