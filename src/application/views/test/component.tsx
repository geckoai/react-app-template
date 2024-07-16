import { Layout } from '@packages/components';
import { LoginForm, Password, useActionData, UserName } from './login.form';
import { Button } from 'antd';
import { useContext } from 'react';
import { I18nContext } from '@packages/i18n';

export const Component = () => {
  const locale = useContext(I18nContext);
  var useActionData1 = useActionData();

  console.log(useActionData1);
  return (
    <Layout>
      <LoginForm style={{ width: 800 }}>
        <UserName />
        <Password />
        <Button
          type="primary"
          htmlType="submit"
          children={locale.PAGES.TEST.SUBMIT}
        />
      </LoginForm>
    </Layout>
  );
};
