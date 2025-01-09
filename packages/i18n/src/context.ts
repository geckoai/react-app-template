import {
  Children,
  cloneElement,
  createContext,
  createElement,
  PropsWithChildren,
} from 'react';
import I18n from '@geckoai/i18n';
import { i18n } from './index';
import { useRecoilValue } from 'recoil';
import { ApplicationStoreState } from '../../../src/application/application.store';

export const localeData = i18n.localeData();

export const I18nContext = createContext(I18n.current(localeData));

export function I18nProvider({ children, ...rest }: PropsWithChildren<{}>) {
  const { locale } = useRecoilValue(ApplicationStoreState);
  i18n.locale(locale);
  const current = I18n.current(localeData);
  return createElement(I18nContext.Provider, {
    value: current,
    children: cloneElement(Children.only(children) as any, {
      locale: current.ANTD,
    }),
    ...rest,
  });
}
