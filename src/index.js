import ReactDOM from 'react-dom';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';

function renderApp() {
    return (
        <Provider store={store}>
            <IntlProvider locale="en">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </IntlProvider>
        </Provider>
    );
}

ReactDOM.render(renderApp(), document.getElementById('root'));
