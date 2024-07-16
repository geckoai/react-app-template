import { Module } from '@packages/router';
import { Component } from './component';
import { LoginModule } from './views/login';
import { AuthorizedModule } from './views/authorized';

@Module({
  path: '/',
  Component,
  children: [AuthorizedModule, LoginModule],
})
export class ApplicationModule {}
