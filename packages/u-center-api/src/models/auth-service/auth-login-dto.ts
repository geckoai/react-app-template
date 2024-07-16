import { ApiRequest } from '@geckoai/http';
import { LoginRequestDto } from './login-request-dto';

@ApiRequest({
  url: '/api/auth-service/auth/login',
  method: 'post',
  description: '用户名密码登陆',
})
export class AuthLoginDto extends LoginRequestDto {}
