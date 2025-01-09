import { Module } from '@packages/router';
import { Component } from './component';
import { localeData } from '@packages/i18n';

@Module({
  index: true,
  Component,
  title: localeData.PAGES.TEST,
  isHideInMenu: true,
})
export class IndexModule {}
