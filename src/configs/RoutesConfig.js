import React from "react";
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "configs/AppConfig";
const asisten = localStorage.getItem('asisten')
export const publicRoutes = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() =>
      import("views/auth-views/authentication/login")
    ),
  },
];
let protectedRoutes=[]
if(asisten){
  protectedRoutes = [
    {
      key: "dashboard.default",
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      component: React.lazy(() => import("views/app-views/dashboards/default")),
    },
    {
      key: "sidenav.dashboard.pipelines",
      path: `${APP_PREFIX_PATH}/dashboard/group`,
      component: React.lazy(() => import("views/app-views/dashboards/pipelines")),
    },
    {
      key: "sidenav.dashboard.pipelines",
      path: `${APP_PREFIX_PATH}/dashboard/pipelines/view/:id`,
      component: React.lazy(() => import("views/app-views/dashboards/pipelines/piplenesView")),
    },
  ];
}else{
  protectedRoutes = [
    {
      key: "dashboard.default",
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      component: React.lazy(() => import("views/app-views/dashboards/default")),
    },
    {
      key: "sidenav.dashboard.pipelines",
      path: `${APP_PREFIX_PATH}/dashboard/pipelines`,
      component: React.lazy(() => import("views/app-views/dashboards/pipelines")),
    },
    {
      key: "sidenav.dashboard.pipelines",
      path: `${APP_PREFIX_PATH}/dashboard/pipelines/view/:id`,
      component: React.lazy(() => import("views/app-views/dashboards/pipelines/piplenesView")),
    },
  
    {
      key: "sidenav.dashboard.settting",
      path: `${APP_PREFIX_PATH}/dashboard/settting`,
      component: React.lazy(() => import("views/app-views/dashboards/settting")),
    },
  ];
}

export default protectedRoutes