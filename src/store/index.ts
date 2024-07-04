import { atom } from 'recoil';

export interface AppStore {
  locale: string;
}

export const AppStoreState = atom<AppStore>({
  key: 'application/store',
  default: {
    locale: 'zh_CN',
  },
});
