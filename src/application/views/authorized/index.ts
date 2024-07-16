import { Module } from '@packages/router';
import { Component } from './component';
import { IndexModule } from './views/index';
import { UserModule } from './views/user';
import { MenuModule } from './views/menu';

@Module({
  path: '/',
  Component,
  children: [IndexModule, UserModule, MenuModule],
})
export class AuthorizedModule {}
