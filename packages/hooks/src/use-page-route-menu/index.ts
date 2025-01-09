import { useMemo } from 'react';
import {
  useLocation,
  useMatches,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useCurrentRoute } from '../use-current-route';
import { Helper } from './helper';

/**
 * 获取当前页面的路由信息
 * @param expand 是否展开children节点
 */
export const usePageRouteMenu = (expand?: boolean) => {
  const location = useLocation();
  const navigate = useNavigate();
  const route = useCurrentRoute();
  const params = useParams();
  const matches = useMatches().reverse();

  const items = useMemo(
    () => Helper.loops(params, route.children, expand, undefined),
    [expand, params, route.children]
  );

  const openKeys = useMemo(() => {
    return matches.map((x) => x.id);
  }, [matches]);

  return {
    items,
    navigate,
    openKeys,
    params,
    selectedKeys: openKeys,
    location,
    route,
  };
};
