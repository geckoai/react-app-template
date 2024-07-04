import { createBrowserRouter } from 'react-router-dom';
import { ClassConstructor, ClassMirror } from '@geckoai/class-mirror';
import { ModuleDecorate } from './module';
import { IndexRoute, NoIndexRoute } from './route';

export class RouterFactory {
  private static reflect(target: ClassConstructor) {
    const mirror = ClassMirror.reflect(target);
    const decorates = mirror.getDecorates(ModuleDecorate);
    const routes: Array<IndexRoute | NoIndexRoute> = [];
    decorates.forEach((value) => {
      const metadata = value.metadata;
      const { children, ...rest } = metadata;
      if (rest.index) {
        if (rest.path) {
          routes.push(IndexRoute.create({ path: undefined }));
          routes.push(IndexRoute.create(rest));
        } else {
          routes.push(IndexRoute.create(rest));
          routes.push(IndexRoute.create({ ...rest, path: 'index.html' }));
        }
      } else {
        const list: Array<IndexRoute | NoIndexRoute> = [];

        children?.forEach((o) => {
          if (o instanceof IndexRoute || o instanceof NoIndexRoute) {
            list.push(o);
          } else {
            const reflect = RouterFactory.reflect(o);
            list.push(...reflect);
          }
        });
        routes.push(
          NoIndexRoute.create({
            ...rest,
            children: list,
          })
        );
      }
    });

    return routes;
  }

  public static create(target: ClassConstructor) {
    return createBrowserRouter(RouterFactory.reflect(target), {});
  }
}
