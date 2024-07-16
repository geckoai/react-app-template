import type { CSSObject, Theme } from '@ant-design/cssinjs';
import { createTheme, useCacheToken } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';
import React from 'react';

export type GetStyle = (prefixCls: string, token: DerivativeToken) => CSSObject;

export interface DesignToken {
  primaryColor: string;
}

export interface DerivativeToken extends DesignToken {
  primaryColorDisabled: string;
}

const defaultDesignToken: DesignToken = {
  primaryColor: '#9B0011',
};

function derivative(designToken: DesignToken): DerivativeToken {
  return {
    ...designToken,
    primaryColorDisabled: new TinyColor(designToken.primaryColor)
      .setAlpha(0.5)
      .toString(),
  };
}

export const ThemeContext = React.createContext(createTheme(derivative));

export const DesignTokenContext = React.createContext<{
  token?: Partial<DesignToken>;
  hashed?: string | boolean;
  cssVar?: {
    key: string;
  };
}>({
  token: defaultDesignToken,
});

export function useToken(): [
  Theme<any, any>,
  DerivativeToken,
  string,
  string | undefined
] {
  const {
    token: rootDesignToken = {},
    hashed,
    cssVar,
  } = React.useContext(DesignTokenContext);
  const theme = React.useContext(ThemeContext);

  const [token, hashId] = useCacheToken<DerivativeToken, DesignToken>(
    theme,
    [defaultDesignToken, rootDesignToken],
    {
      salt: typeof hashed === 'string' ? hashed : '',
      cssVar: cssVar && {
        prefix: 'rc',
        key: cssVar.key,
        unitless: {
          lineHeight: true,
        },
      },
    }
  );
  return [theme, token, hashed ? hashId : '', cssVar?.key];
}
