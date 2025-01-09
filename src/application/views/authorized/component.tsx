import { Layout } from '@packages/components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCurrentRoute } from '@packages/hooks';

import sty from './page.module.less';
import { useMemo } from 'react';
import { Menu } from 'antd';
import { I18n } from '@packages/i18n';

export const Component = () => {
  const route = useCurrentRoute();
  const navigate = useNavigate();

  const routes = useMemo(() => {
    return (
      route.children?.filter((x) => Boolean(x.path) && !x.isHideInMenu) || []
    );
  }, [route.children]);

  return (
    <Layout>
      <Layout.Header className={sty.header} />
      <Layout>
        <Layout.Sider width="23rem">
          <Menu
            onSelect={(e) => {
              console.log(e);
              navigate(`/${e.key}`);
            }}
            items={routes.map((x) => ({
              key: x.path || '',
              label: x.title ? I18n.current<string>(x.title.TITLE) : x.path,
            }))}
          />
        </Layout.Sider>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
