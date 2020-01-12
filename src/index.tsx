import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from 'translations';

import App from 'App';
import * as serviceWorker from './serviceWorker';
import store from './ducks/store';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
