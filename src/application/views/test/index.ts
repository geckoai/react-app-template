import { Module } from '@packages/router';
import { Component } from './component';
import { action } from './login.form';

@Module({
  path: 'test',
  Component,
  action,
})
export class TestModule {}
