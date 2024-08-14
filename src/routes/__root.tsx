import Navbar from "@/layout/-Navbar";

import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="font-Montserrat">
      <Navbar />
      <Outlet />
    </div>
  ),
});
