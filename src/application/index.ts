import { Module } from 'src/libs';
import { Component } from './component';
import { IndexModule } from './views/index';

@Module({
  path: '/',
  Component,
  children: [IndexModule],
})
export class ApplicationModule {}
