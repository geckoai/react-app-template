import { createContext, createElement, PropsWithChildren } from 'react';
import I18n from '@geckoai/i18n';
import { i18n } from './index';
import { ConfigProvider, theme } from '@packages/components';

export const localeData = i18n.localeData();

export const I18nContext = createContext(localeData);

export function I18nProvider(props: PropsWithChildren<{}>) {
  const current = I18n.current(localeData);
  return createElement(I18nContext.Provider, {
    value: current,
    children: createElement(ConfigProvider, {
      locale: current.ANTD,
      theme: {
        token: {
          colorPrimary: '#9B0011',
        },
        algorithm: [theme.compactAlgorithm],
        components: {
          Menu: {
            // itemColor: '#fff',
            // colorPrimary: '#fff',
            // fontSize: 18,
          },
          Layout: {
            headerBg: '#9B0011',
            siderBg: '#fff',
          },
        },
      },
      ...props,
    }),
  });
}
