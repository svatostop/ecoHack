import React from "react";

const Leaflet = React.lazy(() => import("basic"));

const routes = [
 {
    enabled: true,
    path: "/leaflet",
    component: Leaflet,
    navbar: "React Leaflet",
    child: [
      {
        name: "Basic Map",
        path: "/basic",
      },
    ],
  },
 ];

export default routes.filter((route) => route.enabled);
