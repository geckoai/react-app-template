import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

export const Component = () => {
  return (
    <Layout style={{ width: '100vw', minHeight: '100vh' }}>
      <Outlet />
    </Layout>
  );
};
