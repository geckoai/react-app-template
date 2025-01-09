import { Module } from '@packages/router';
import { Component } from './component';
import { localeData } from '@packages/i18n';

@Module({
  path: 'user.html',
  Component,
  title: localeData.PAGES.USER,
})
export class UserModule {}
