import { ApiProperty } from '@geckoai/http';
import { Typed } from '@geckoai/class-transformer';
import { i18n, localeData } from '@packages/i18n';
import { I18n } from '@geckoai/i18n';

export class LoginRequestDto {
  @ApiProperty({
    type: 'string',
    description: 'app ID(默认用户中心)',
  })
  @Typed(String)
  public appId: string;

  @ApiProperty({
    type: 'string',
    description: '应用密钥',
  })
  @Typed(String)
  public appSecret: string;

  @ApiProperty({
    type: 'string',
    description: '登陆设备uuid',
  })
  @Typed(String)
  public deviceId: string;

  @ApiProperty({
    type: 'string',
    description: '登陆设备操作系统: Android/iOS',
  })
  @Typed(String)
  public os: string;

  @ApiProperty({
    type: 'string',
    description: '账户密码',
    locale: localeData.PAGES.TEST.PASS_WORD,
  })
  @Typed(String)
  public password: string;

  @ApiProperty({
    type: 'string',
    description:
      '登陆终端类型:  1-PC管理端 2-移动APP端(Android/ios) 3-终端设备',
  })
  @Typed(String, {
    rules: {
      type: 'Enum',
      enums: ['1', '2', '3'],
    },
  })
  public terminalType: string;

  @ApiProperty({
    type: 'string',
    description: '账户名称',
    locale: localeData.PAGES.TEST.USER_NAME,
  })
  @Typed(String)
  public username: string;

  @ApiProperty({
    type: 'string',
    description: '图片验证码uuid',
  })
  @Typed(String)
  public uuid: string;

  @ApiProperty({
    type: 'string',
    description: '验证码',
  })
  @Typed(String)
  public verifyCode: string;
}
