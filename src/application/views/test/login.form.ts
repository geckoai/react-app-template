import { FormBuilder } from '@packages/form-builder';
import { AuthLoginDto, UCenterAPI } from '@packages/u-center-api';
import { Input } from '@packages/components';

const formBuilder = FormBuilder.create(UCenterAPI, AuthLoginDto);

export const UserName = formBuilder.get('username').build(Input, {});
export const Password = formBuilder.get('password').build(Input, {
  type: 'password',
});

export const { action, useActionData } = formBuilder.getAction();

export const LoginForm = formBuilder.build();
