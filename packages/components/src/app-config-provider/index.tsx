import { App, ConfigProviderProps, ConfigProvider, theme } from 'antd';

export const AppConfigProvider = ({
  children,
  ...rest
}: ConfigProviderProps) => {
  return (
    <ConfigProvider
      {...rest}
      notification={{
        style: { top: 80 },
      }}
      theme={{
        token: {
          colorPrimary: '#169d71',
          colorLink: '#169d71',
        },
        algorithm: [theme.compactAlgorithm],
        components: {
          Menu: {
            activeBarBorderWidth: 0,
            // itemColor: '#fff',
            // colorPrimary: '#fff',
            // fontSize: 18,
          },
          Layout: {
            headerBg: '#169d71',
            headerColor: '#fff',
            siderBg: '#fff',
            headerPadding: 20,
          },
          Input: {
            // inputFontSize: 20,
            // paddingBlock: 3,
          },
        },
      }}
    >
      <App children={children} />
    </ConfigProvider>
  );
};
