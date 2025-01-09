import { Module } from '@packages/router';
import { Component } from './component';
import { localeData } from '@packages/i18n';

@Module({
  path: 'menu.html',
  Component,
  title: localeData.PAGES.MENU,
})
export class MenuModule {}
