import { Module } from '@packages/router';
import { Component } from './component';
import { I18n } from '@geckoai/i18n';
import { i18n } from '@packages/i18n';

@Module({
  path: 'user.html',
  Component,
  title: I18n.locales(i18n.localeData().PAGES.USER.TITLE),
})
export class UserModule {}
