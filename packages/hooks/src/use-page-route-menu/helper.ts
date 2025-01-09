import { IndexRoute, NoIndexRoute } from '@packages/router';
import { I18n } from '@packages/i18n';
import type * as React from 'react';
import { generatePath } from 'react-router-dom';

export class Helper {
  public static loops(
    params: object,
    routes?: Array<NoIndexRoute | IndexRoute>,
    loop?: boolean,
    parent?: ItemType
  ): ItemType[] | undefined {
    return routes
      ?.filter((x) => !x.isHideInMenu)
      .map((x) => {
        const obj: ItemType = {
          parent,
          id: x.id,
          icon: x.icon,
          label:
            typeof x.title === 'string'
              ? x.title
              : x.title
              ? I18n.current<string>(x.title.TITLE)
              : '',
          path: generatePath(x.realPath, params),
          key: x.id as string,
        };
        if (x.children?.length && loop) {
          obj.children = Helper.loops(params, x.children, loop, undefined);
        }
        return obj;
      });
  }

  public static expands(
    route?: NoIndexRoute | IndexRoute
  ): Array<NoIndexRoute | IndexRoute> {
    if (route) {
      if (route.children) {
        return route.children.flatMap((x) => Helper.expands(x)).concat([route]);
      }
      return [route];
    }
    return [];
  }

  public static find(
    type: NoIndexRoute | IndexRoute,
    id: string
  ): NoIndexRoute | IndexRoute | null {
    if (type.id === id) {
      return type;
    }
    if (type.children) {
      for (let child of type.children) {
        const find = Helper.find(child, id);
        if (find) {
          return find;
        }
      }
    }

    return null;
  }

  public static parents(type: ItemType): ItemType[] {
    if (type.parent) {
      return Helper.parents(type.parent).concat(type);
    }

    return [type];
  }
}

export interface ItemType {
  parent?: ItemType;
  id?: string;
  icon?: any;
  label: React.ReactNode;
  key: string;
  children?: ItemType[];
  hidden?: boolean;
  path?: string;
}
