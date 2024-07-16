import { Module } from '@packages/router';
import { Component } from './component';
import { I18n } from '@geckoai/i18n';
import { i18n } from '@packages/i18n';

console.log(i18n.localeData().PAGES);

console.log(I18n.locales(i18n.localeData().PAGES));
console.log(I18n.current(i18n.localeData().PAGES));

@Module({
  index: true,
  Component,
  title: I18n.locales(i18n.localeData().PAGES.TEST.TITLE),
  isHideInMenu: true,
})
export class IndexModule {}
