import { ApiProperty } from '@geckoai/http';
import { Typed, TypedArray } from '@geckoai/class-transformer';

export class LoginResponseVo {
  @ApiProperty({
    type: 'string',
    description: '访问token',
  })
  @Typed(String)
  public accessToken: string;

  @ApiProperty({
    type: 'string',
    description: '账户ID',
  })
  @Typed(String)
  public accountId: string;

  @ApiProperty({
    type: 'array',
    description: '授权的应用列表',
  })
  @TypedArray(String)
  public applications: string[];

  @ApiProperty({
    type: 'array',
    description: '权限列表',
  })
  @TypedArray(String)
  public authorities: string[];

  @ApiProperty({
    type: 'string',
    description: '头像',
  })
  @Typed(String)
  public avatar: string;

  @ApiProperty({
    type: 'string',
    description: '部门(门店)ID',
  })
  @Typed(String)
  public departmentId: string;

  @ApiProperty({
    type: 'string',
    description: '部门(门店)名称',
  })
  @Typed(String)
  public departmentName: string;

  @ApiProperty({
    type: 'integer',
    description: 'token有效期(s)',
  })
  @Typed(Number)
  public expiresIn: number;

  @ApiProperty({
    type: 'string',
    description: 'token到期时间',
  })
  @Typed(String)
  public expiresTime: string;

  @ApiProperty({
    type: 'string',
    description: '姓名',
  })
  @Typed(String)
  public name: string;

  @ApiProperty({
    type: 'string',
    description: '昵称',
  })
  @Typed(String)
  public nickname: string;

  @ApiProperty({
    type: 'string',
    description: '登陆后续操作:  1-登陆 2-注册',
  })
  @Typed(String, {
    rules: {
      type: 'Enum',
      enums: ['1', '2'],
    },
  })
  public postAction: string;

  @ApiProperty({
    type: 'boolean',
    description: '是否租户管理员',
  })
  @Typed(Boolean)
  public tenantAdministrator: boolean;

  @ApiProperty({
    type: 'string',
    description: '租户ID',
  })
  @Typed(String)
  public tenantId: string;

  @ApiProperty({
    type: 'string',
    description: '租户名称',
  })
  @Typed(String)
  public tenantName: string;

  @ApiProperty({
    type: 'string',
    description:
      '账户类型:  01-超级管理员 02-管理员 03-普通账户 04-企业账户 05-个人账户 06-服务账户 07-API账户 08-外部账户 09-匿名账户 10-门店账户 11-工程师',
  })
  @Typed(String, {
    rules: {
      type: 'Enum',
      enums: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    },
  })
  public type: string;

  @ApiProperty({
    type: 'string',
    description: '账户名称',
  })
  @Typed(String)
  public username: string;

  @ApiProperty({
    type: 'string',
    description: '唯一标识uuid',
  })
  @Typed(String)
  public uuid: string;
}
