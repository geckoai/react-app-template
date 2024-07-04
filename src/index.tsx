import 'reflect-metadata';
import React, { useEffect } from 'react';
import 'normalize.css/normalize.css';
import { RouterFactory } from '@packages/router';
import i18n, { I18nProvider } from '@packages/i18n';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import reportWebVitals from 'src/reportWebVitals';
import { ApplicationModule } from './application';
import { AppStoreState } from './store';

const root = document.getElementById('root');

const router = RouterFactory.create(ApplicationModule);

function App() {
  const { locale } = useRecoilValue(AppStoreState);
  useEffect(() => {
    i18n.locale(locale);
  }, [locale]);
  return (
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  );
}

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your router, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
