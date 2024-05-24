import {
  ClassMirror,
  ClassDecorate,
  ClassConstructor,
} from '@geckoai/class-mirror';
import { IndexRoute, NoIndexRoute } from './route';

export class ModuleDecorate extends ClassDecorate<RouteImpl> {}

export interface RouteImpl
  extends Omit<NoIndexRoute | IndexRoute, 'children' | 'index'> {
  children?: Array<ClassConstructor | NoIndexRoute | IndexRoute>;
  index?: boolean;
  isHideInMenu?: boolean;
  title?: Record<string, any>;
}

export function Module(decorate: RouteImpl): ClassDecorator {
  return ClassMirror.createDecorator(new ModuleDecorate(decorate));
}
