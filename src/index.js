import React from 'react';
import './fonts.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import 'antd/dist/antd.css';

const initialState = {
  openToast: false,
};
const store = configureStore(initialState);

const ROOT = (
  <ThemeProvider>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <CssBaseline />
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(ROOT, document.getElementById('root'));
