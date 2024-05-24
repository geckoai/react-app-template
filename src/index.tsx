import 'reflect-metadata';
import React, {useEffect} from 'react';
import 'normalize.css/normalize.css';
import * as ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {RecoilRoot, useRecoilValue} from 'recoil';
import reportWebVitals from 'src/reportWebVitals';
import {RouterFactory} from 'src/libs';
import {ApplicationModule} from './application';
import {AppStoreState} from './store';
import {I18nProvider} from "./i18n/context";
import i18n from "./i18n";

const root = document.getElementById('root');

const router = RouterFactory.create(ApplicationModule);

function App() {
    const {locale} = useRecoilValue(AppStoreState);
    useEffect(() => {
        i18n.locale(locale);
    }, [locale]);
    return (
        <I18nProvider>
            <RouterProvider router={router}/>
        </I18nProvider>
    );
}

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <RecoilRoot>
                <App/>
            </RecoilRoot>
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
