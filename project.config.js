const path = require('path');
const IS_PROD = process.env.NODE_ENV === 'production';
const URI = 'https://aichatdev.mingqi-tech.cn';
// const px2rem = require('postcss-pxtorem');

module.exports = {
  /**
   * webpack config options
   * see: https://webpack.js.org/configuration/
   */
  webpack: {},
  /**
   * style configs
   */
  style: {
    /**
     * css-loader options
     * see: https://webpack.js.org/loaders/css-loader#options
     */
    css: {},
    /**
     * less-loader options
     * see: https://webpack.js.org/loaders/less-loader#options
     */
    less: {
      lessOptions: {
        modifyVars: {
          '@primary-color': '#38A28A'
        },
        javascriptEnabled: true
      }
    },
    /**
     * sass-loader options
     * see: https://webpack.js.org/loaders/sass-loader/#options
     */
    sass: {},
    /**
     * postcss-loader options
     * https://webpack.js.org/loaders/postcss-loader/#options
     */
    postcss: {
      postcssOptions: {
        // rem 方案代码
        // plugins: [
        //   px2rem({
        //     rootValue: 12,
        //     unitPrecision: 5,
        //     propList: ['*'],
        //     selectorBlackList: [],
        //     replace: true,
        //     mediaQuery: false,
        //     minPixelValue: 0,
        //   })
        // ]
      }
    }
  },
  /**
   * babel-loader options
   * see: https://webpack.js.org/loaders/babel-loader/#options
   */
  babel: {},
  /**
   * ts-loader options
   * see: https://github.com/TypeStrong/ts-loader
   */
  ts: {},
  /**
   * file-loader options
   * see: https://github.com/webpack-contrib/file-loader
   */
  file: {},
  /**
   * EslintWebpackPlugin options
   * see: https://webpack.js.org/plugins/eslint-webpack-plugin/#options
   */
  eslint: {},
  /**
   * StylelintWebpackPlugin options
   * see: https://webpack.js.org/plugins/stylelint-webpack-plugin/#options
   */
  styleLint: null,
  // DevServer see: https://webpack.js.org/configuration/dev-server
  devServer: {
    compress: true,
    proxy: {
      '/api': {
        target: URI,
        changeOrigin: true
      }
    }
  },
  alias: {
    '@packages': path.resolve('packages')
  },
  // CDN配置
  deployOptions: {
    packages: {
      'validator': {
        scripts: {
          variableName: 'validator',
          path: IS_PROD ? 'validator.min.js' : 'validator.js',
          cdnPath: IS_PROD ? 'validator.min.js' : 'validator.js'
        }
      },
      // "echarts": {
      //   scripts: {
      //     variableName: 'echarts',
      //     path: IS_PROD ? 'echarts.min.js' : 'echarts.js',
      //     cdnPath: IS_PROD ? 'dist/echarts.min.js' : 'dist/echarts.js',
      //   }
      // },
      // "@ant-design/icons": {
      //   scripts: {
      //     variableName: 'icons',
      //     path: IS_PROD ? 'authorized.umd.min.js' : 'authorized.umd.js',
      //     cdnPath: IS_PROD ? 'dist/authorized.umd.min.js' : 'dist/authorized.umd.js',
      //   }
      // },
      'axios': {
        scripts: {
          variableName: 'axios',
          path: IS_PROD ? 'axios.min.js' : 'axios.js',
          cdnPath: IS_PROD ? 'dist/axios.min.js' : 'dist/axios.js'
        }
      },
      'react': {
        scripts: {
          variableName: 'React',
          path: IS_PROD ? 'react.production.min.js' : 'react.development.js',
          cdnPath: IS_PROD ? 'umd/react.production.min.js' : 'umd/react.development.js'
        }
      },
      'react-dom': {
        scripts: {
          variableName: 'ReactDOM',
          path: IS_PROD ? 'react-dom.production.min.js' : 'react-dom.development.js',
          cdnPath: IS_PROD ? 'umd/react-dom.production.min.js' : 'umd/react-dom.development.js'
        }
      },
      '@remix-run/router': {
        scripts: {
          variableName: 'RemixRouter',
          path: IS_PROD ? 'router.umd.min.js' : 'router.umd.js',
          cdnPath: IS_PROD ? 'dist/router.umd.min.js' : 'dist/router.umd.js'
        }
      },
      'react-router': {
        scripts: {
          variableName: 'ReactRouter',
          path: IS_PROD ? 'react-router.production.min.js' : 'react-router.development.js',
          cdnPath: IS_PROD ? 'dist/umd/react-router.production.min.js' : 'dist/umd/react-router.development.js'
        }
      },
      'react-router-dom': {
        scripts: {
          variableName: 'ReactRouterDOM',
          path: IS_PROD ? 'react-router-dom.production.min.js' : 'react-router-dom.development.js',
          cdnPath: IS_PROD ? 'dist/umd/react-router-dom.production.min.js' : 'dist/umd/react-router-dom.development.js'
        }
      },
      'dayjs': {
        scripts: {
          variableName: 'dayjs',
          path: 'dayjs.min.js',
          cdnPath: 'dayjs.min.js'
        }
      },
      'antd': {
        scripts: {
          variableName: 'antd',
          path: IS_PROD ? 'antd.min.js' : 'antd.js',
          cdnPath: IS_PROD ? 'dist/antd.min.js' : 'dist/antd.js'
        }
      }
    },
    useCdn: true,
    getCdnPath: (n, v, p) => `https://unpkg.com/${n}@${v}/${p}`
  },
  // swagger生成器配置
  swaggers: [
    {
      url: `${URI}/api/auth-service/v2/api-docs`,
      outputs: [
        {
          dest: path.resolve('apis', 'auth-service'),
          dtos: [
            {
              path: '/auth/login',
              method: 'post',
              name: 'AuthLoginDto'
            }
            // {
            //   path: '/user/info',
            //   method: 'get',
            //   name: 'UserInfoDto',
            // }
            // {
            //   path: '/sms/phone/code',
            //   method: 'get',
            //   name: 'SMSPhoneCode',
            // },
            // {
            //   path: '/behavioral/captcha/generate',
            //   method: 'post',
            //   name: 'BehavioralCaptchaGenerateDto',
            // },
            // {
            //   path: '/behavioral/captcha/validate',
            //   method: 'post',
            //   name: 'BehavioralCaptchaValidateDto',
            // }
          ],
          vos: [
            // {name: 'BehaviorVerificationDto', target: "BehaviorVerificationDto" },
            // {name: 'ImageCaptchaTrack', target: "ImageCaptchaTrack" },
            // {name: 'Track', target: "Track" },
            // {name: 'BehaviorCaptchaVo', target: "BehaviorCaptchaVo" },
            // {name: 'ImageCaptchaVo', 'target': 'ImageCaptchaVO' },
            { name: 'LoginRequestDto', target: 'LoginRequestDto' },
            { name: 'LoginResponseVo', target: 'LoginResponseDto' }
          ]
        }
      ]
    }
  ]
};
