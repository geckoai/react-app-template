import {createContext, createElement, PropsWithChildren} from "react";
import {i18n} from "./index";
import I18n from "@geckoai/i18n";
import {ConfigProvider, theme} from "antd";

const localeData = i18n.localeData();
export const I18nContext = createContext(localeData);

export function I18nProvider(props: PropsWithChildren<{}>) {
    const current = I18n.current(localeData);
    return createElement(I18nContext.Provider, {
        value: current,
        children: createElement(ConfigProvider, {
            locale: current.ANTD,
            theme: {
                token: {
                    colorPrimary: '#38a28a',
                },
                algorithm: [theme.compactAlgorithm],
                components: {
                    Menu: {
                        itemColor: '#fff',
                        colorPrimary: '#fff',
                        fontSize: 14,
                    },
                },
            },
            ...props
        })
    });
}