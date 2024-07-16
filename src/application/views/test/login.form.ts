import { FormBuilder } from '@packages/utils';
import { AuthLoginDto } from '@packages/u-center-api';
import { Input } from '@packages/components';

const formBuilder = FormBuilder.create(AuthLoginDto);

export const UserName = formBuilder.get('username').build(Input, {});
export const Password = formBuilder.get('password').build(Input, {
  type: 'password',
});

export const { action, useActionData } = formBuilder.getAction();

export const LoginForm = formBuilder.build();
