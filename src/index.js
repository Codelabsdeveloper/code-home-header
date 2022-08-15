import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';


window.renderheader = (containerId, history) => {
    createRoot.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountHeader = containerId => {
  createRoot.unmountComponentAtNode(document.getElementById(containerId));
};


if (!document.getElementById('Header-container')) {
    const root = createRoot(document.getElementById("root"));
    root.render(<App />);
}