import React from 'react'
import ReactDOM from 'react-dom/client'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import App from './App'

const myTheme = {
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BootstrapProvider theme={myTheme}>
      <App />
    </BootstrapProvider>
);
