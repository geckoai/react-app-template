import { AgnosticIndexRouteObject } from '@remix-run/router';

export class LoaderFactory {
  public static create(): AgnosticIndexRouteObject['loader'] {
    return ({ params, context, request }) => {
      return true;
    };
  }
}
